package common

import (
	"fmt"

	"github.com/rebornist/hanbit_v1.0/customTypes"
	"github.com/rebornist/hanbit_v1.0/models"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

func CheckStatus(c echo.Context, db *gorm.DB) (*customTypes.JWTUserInfo, error) {

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

	userInfo := &customTypes.JWTUserInfo{
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
