package configs

import "time"

// DB 접속 정보
type Database struct {
	Host     string
	Port     string
	Name     string
	User     string
	Password string
	Tables   map[string]string
}

// OAuth Token 정보
type OAuthToken struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
	ExpriesIn    string `json:"expries_in"`
	TokenType    string `json:"token_type"`
	ProfileUri   string `json:"profile_uri"`
}

// Oauth Profile 정보
type OAuthProfile struct {
	Id           string `json:"id"`
	Nickname     string `json:"nickname"`
	Name         string `json:"name"`
	Email        string `json:"email"`
	MobileE164   string `json:"mobile_e164"`
	Mobile       string `json:"mobile"`
	Birthday     string `json:"birthday"`
	ProfileImage string `json:"profile_image"`
}

// Naver OAuth 정보
type NaverOAuth struct {
	NaverLoginClientId     string `json:"naver_login_client_id"`
	NaverLoginClientSecret string `json:"naver_login_client_secret"`
	NaverGetTokenUri       string `json:"naver_get_token_uri"`
	NaverGetUserUri        string `json:"naver_get_user_uri"`
}

// Kakao OAuth 정보
type KakaoOAuth struct {
	KakaoLoginClientId     string `json:"kakao_login_client_id"`
	KakaoLoginClientSecret string `json:"kakao_login_client_secret"`
	KakaoGetTokenUri       string `json:"kakao_get_token_uri"`
	KakaoGetUserUri        string `json:"kakao_get_user_uri"`
}

// AWS OAuth 정보
type AWSOAuth struct {
	AWSLoginClientId     string `json:"aws_login_client_id"`
	AWSLoginClientSecret string `json:"aws_login_client_secret"`
	AWSGetTokenUri       string `json:"aws_get_token_uri"`
	AWSGetUserUri        string `json:"aws_get_user_uri"`
}

// LetsEncrypt 접속 정보
type Encrypt struct {
	Dir  string `json:"dir"`
	Cert string `json:"cert"`
	Key  string `json:"key"`
}

type Table struct {
	Board     string `json:"boa"`
	Broadcast string `json:"bro"`
	Gallary   string `json:"gal"`
	Image     string `json:"img"`
	Logger    string `json:"log"`
	Post      string `json:"pos"`
	Sermon    string `json:"ser"`
	User      string `json:"usr"`
}

// service 접속 정보
type Service struct {
	Test string `json:"test"`
}

// 공통 Responst type
type CommonResponse struct {
	Code       int                    `json:"code"`
	Message    string                 `json:"message"`
	Data       map[string]interface{} `json:"data"`
	Permission bool                   `json:"permission"`
}

type Post struct {
	ID        string    `gorm:"column:id;type:varchar(150);primaryKey" json:"id"`
	Number    uint      `gorm:"column:number;unique;default:1" json:"number"`
	Title     string    `gorm:"column:title;type:varchar(255);unique;not null" json:"title"`
	CreatedAt time.Time `gorm:"column:created_at" json:"created_at"`
	UpdatedAt time.Time `gorm:"column:updated_at" json:"updated_at"`
}

type PostResponse struct {
	ID     string `json:"id"`
	Number uint   `json:"number"`
}

type CertificationResponse struct {
	IdToken string `json:"idToken"`
	Csrf    string `json:"csrf"`
}
