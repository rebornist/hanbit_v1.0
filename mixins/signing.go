package mixins

import (
	"crypto/rsa"
	"encoding/base32"
	"encoding/json"
	"errors"
	"fmt"
	"time"

	"github.com/rebornist/hanbit_v1.0/configs"
	"github.com/rebornist/hanbit_v1.0/models"

	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

func Signing(s string) (string, error) {
	byteStr, err := configs.EncryptionAESKey(s)
	if err != nil {
		return "", err
	}
	signedtext := base32.StdEncoding.EncodeToString(byteStr)
	return signedtext, nil
}

func Unsigning(s string) (string, error) {
	unsignedByte, err := base32.StdEncoding.DecodeString(s)
	if err != nil {
		return "", err
	}
	byteStr, err := configs.DecryptionAESKey(string(unsignedByte))
	if err != nil {
		return "", err
	}
	return string(byteStr), nil
}

func CreateAccessJWT(email string) (*models.JWTToken, *models.JWTUserInfo, error) {

	jt, userInfo, err := initJWT(email)
	if err != nil {
		return nil, nil, err
	}

	// rsa 파일 위치 불러오기
	var jwtKey models.JWTKey
	pathByte, err := configs.GetServiceInfo("jwt_token")
	if err != nil {
		return nil, nil, err
	}
	json.Unmarshal(pathByte, &jwtKey)

	// // access 토큰 생성
	// aSignBytes, err := ioutil.ReadFile(jwt.AccessPrivatePath)
	// if err != nil {
	// 	return nil, nil, err
	// }

	aSignKey, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(jwtKey.AccessPrivateKey))
	if err != nil {
		return nil, nil, err
	}

	accessToken := jwt.New(jwt.SigningMethodRS256)
	atClaims := accessToken.Claims.(jwt.MapClaims)
	atClaims["authorized"] = true
	atClaims["user"] = userInfo
	atClaims["access_id"] = jt.AccessId
	atClaims["exp"] = jt.AtExpires
	jt.AccessToken, err = accessToken.SignedString(aSignKey)
	if err != nil {
		return nil, nil, err
	}

	return jt, userInfo, nil
}

func CreateRefreshJWT(email string) (*models.JWTToken, *models.JWTUserInfo, error) {

	jt, userInfo, err := initJWT(email)
	if err != nil {
		return nil, nil, err
	}

	// rsa 파일 위치 불러오기
	var jwtKey models.JWTKey
	pathByte, err := configs.GetServiceInfo("jwt_token")
	if err != nil {
		return nil, nil, err
	}
	json.Unmarshal(pathByte, &jwtKey)

	// refresh 토큰 생성
	// rSignBytes, err := ioutil.ReadFile(jwtKey.RefreshPrivateKey)
	// if err != nil {
	// 	return nil, nil, err
	// }
	rSignKey, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(jwtKey.RefreshPrivateKey))
	if err != nil {
		return nil, nil, err
	}

	refreshToken := jwt.New(jwt.SigningMethodRS256)
	rtClaims := refreshToken.Claims.(jwt.MapClaims)
	rtClaims["refresh_id"] = jt.RefreshId
	rtClaims["user"] = userInfo
	rtClaims["exp"] = jt.RtExpires
	jt.RefreshToken, err = refreshToken.SignedString(rSignKey)
	if err != nil {
		return nil, nil, err
	}

	return jt, userInfo, nil
}

func VerifyJWT(Type, Value string) (*jwt.Token, error) {

	// rsa 파일 위치 불러오기
	var jwtKey models.JWTKey
	var pathByte, _ = configs.GetServiceInfo("jwt_token")
	json.Unmarshal(pathByte, &jwtKey)

	var verifyKey *rsa.PublicKey
	var err error
	switch Type {
	case "access":
		// verifyBytes, err := ioutil.ReadFile(jwtKey.AccessPublicPath)
		// if err != nil {
		// 	return nil, err
		// }
		verifyKey, err = jwt.ParseRSAPublicKeyFromPEM([]byte(jwtKey.AccessPublicKey))
		if err != nil {
			return nil, err
		}
	case "refresh":
		// verifyBytes, err := ioutil.ReadFile(jwtPath.RefreshPublicPath)
		// if err != nil {
		// 	return nil, err
		// }
		verifyKey, err = jwt.ParseRSAPublicKeyFromPEM([]byte(jwtKey.RefreshPublicKey))
		if err != nil {
			return nil, err
		}
	}

	claims := jwt.MapClaims{}
	token, err := jwt.ParseWithClaims(Value, &claims, func(token *jwt.Token) (interface{}, error) {
		return verifyKey, nil
	})
	if err != nil {
		return nil, err
	}

	return token, nil
}

func CheckRefreshToken(c echo.Context, db *gorm.DB) (*models.JWTUserInfo, error) {
	session, err := c.Cookie("SID")
	if err != nil {
		return nil, err
	}

	uid, _ := Unsigning(session.Value)
	var sess models.Session
	if err := db.Find(&sess).Where("id=?", uid).Error; err != nil {
		return nil, err
	}

	// 세션 만료시간이 지난 경우 쿠키 및 DB 삭제
	if sess.Expires < time.Now().Unix() {

		if err := db.Where("id = ?", uid).Delete(&sess).Error; err != nil {
			return nil, err
		}

		delSession := DeleteCookie("SID", "/")
		c.SetCookie(delSession)

		return nil, errors.New("세션 만료 기간이 지났습니다.")
	}

	// refresh 토큰 정보 가져오기
	data, err := GetClaimsInfo("refresh", sess.TokenValue)
	if err != nil {
		return nil, err
	}

	claimsInfo := data["user"].(map[string]interface{})
	email := claimsInfo["email"].(string)

	jt, userInfo, err := CreateAccessJWT(email)
	if err != nil {
		return nil, err
	}
	userInfo.IdToken = jt.AccessToken

	return userInfo, nil
}

func CheckStatus(c echo.Context, db *gorm.DB) (*models.JWTUserInfo, error) {

	session, err := c.Cookie("SID")
	if err != nil {
		return nil, err
	}

	type Resp struct {
		Token   string
		Expires int
	}

	uid, _ := Unsigning(session.Value)
	var sess models.Session
	// db.Table("sessions").Select("token_value", "expires").Where("uid = ?", uid).Scan(&sess)
	// fmt.Println(row)
	// query := fmt.Sprintf("SELECT `token_value`, `expires` FROM sessions WHERE uid='%s'", uid)
	// fmt.Println(query)
	// var test map[string]interface{}
	// // err = db.Raw(query).Find(sess).Error
	// err = db.Model(&Session{}).First(&test, "uid = ?", uid).Error
	// if err != nil {
	// 	fmt.Println(err)
	// }
	if err := db.Table("sessions").Where("uid = ?", uid).Find(&sess).Error; err != nil {
		// if err := db.Raw().Row().Error; err != nil {
		fmt.Println(err)
		return nil, err
	}
	// uid = fmt.Sprintf(`"%s"`, uid)
	fmt.Println(uid)

	// err = db.Model(&Session{}).Raw("SELECT token_value FROM hanbit.sessions WHERE uid=$1", uid).First(&sess.TokenValue).Error
	// // err = row.Scan(&sess.TokenValue)
	// if err != nil {
	// 	return nil, err
	// }

	fmt.Println(sess)

	// // 세션 만료시간이 지난 경우 쿠키 및 DB 삭제
	// if sess.Expires < time.Now().Unix() {

	// 	if err := db.Delete(&sess, "uid = ?", uid).Error; err != nil {
	// 		return nil, err
	// 	}

	// 	delSession := DeleteCookie("SID", "/")
	// 	c.SetCookie(delSession)

	// 	return nil, errors.New("세션 만료 기간이 지났습니다.")
	// }

	// refresh 토큰 정보 가져오기
	// data, err := GetClaimsInfo("refresh", sess.TokenValue)
	data, err := GetClaimsInfo("refresh", "test")
	if err != nil {
		return nil, err
	}

	claimsInfo := data["user"].(map[string]interface{})

	userInfo := &models.JWTUserInfo{
		UID:   claimsInfo["uid"].(string),
		Email: claimsInfo["email"].(string),
		Grade: claimsInfo["grade"].(float64),
	}

	fmt.Println(userInfo)

	// jt, userInfo, err := CreateAccessJWT(email)
	// if err != nil {
	// 	return nil, err
	// }
	// userInfo.IdToken = jt.AccessToken

	return userInfo, nil
}

func GetClaimsInfo(Type, Value string) (map[string]interface{}, error) {

	token, err := VerifyJWT(Type, Value)
	if err != nil {
		return nil, err
	}

	data := make(map[string]interface{})
	claims := token.Claims
	tmp, err := json.Marshal(claims)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(tmp, &data)
	if err != nil {
		return nil, err
	}
	return data, nil
}

func initJWT(email string) (*models.JWTToken, *models.JWTUserInfo, error) {
	// 유저정보 추출
	var db = configs.ConnectDb()
	userInfo := &models.JWTUserInfo{}

	if err := db.Table("users").Select("uid, email, grade").Where("email = ?", email).Scan(userInfo).Error; err != nil {
		return nil, nil, err
	}
	uid := *&userInfo.UID
	uid, _ = Signing(uid)

	// 토큰 생성
	jt := &models.JWTToken{}

	now := time.Now() // Go Playground 에서는 항상 시각은 2009-11-10 23:00:00 +0000 UTC 에서 시작한다.

	jt.AtExpires = now.Add(time.Minute * 15).Unix()
	jt.AccessId = CreateRandomString(24)

	jt.RtExpires = now.Add(time.Hour * 24 * 7).Unix()
	var val string
	for {
		val = CreateRandomString(24)
		resp, _ := createID(db, val)
		if resp {
			break
		}
	}
	if val != "" {
		jt.RefreshId = val
		userInfo = &models.JWTUserInfo{
			UID:   uid,
			Email: *&userInfo.Email,
			Grade: *&userInfo.Grade,
		}
	} else {
		err := errors.New("토큰 아이디 생성 실패")
		return nil, nil, err
	}

	return jt, userInfo, nil
}

func createID(db *gorm.DB, val string) (bool, error) {

	var count int64
	if err := db.Table("sessions").Where("id = ?", val).Count(&count).Error; err != nil {
		return false, err
	}

	if count == 0 {
		return true, nil
	}

	return false, errors.New("해당 아이디가 존재합니다.")

}
