package models

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
