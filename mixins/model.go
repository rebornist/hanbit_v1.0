package mixins

import "time"

type Logger struct {
	ID         uint          `gorm:"primaryKey" json:"id"`
	Body       string        `gorm:"column:body;type:longtext" json:"body"`
	ConnectIp  string        `gorm:"column:connect_ip;type:varchar(25);default:''" json:"connect_ip"`
	RequestId  string        `gorm:"column:request_id;index;type:varchar(100)" json:"request_id"`
	RequestUrl string        `gorm:"column:request_url;type:longtext" json:"request_url"`
	Message    string        `gorm:"column:message;type:longtext" json:"message"`
	Status     int           `json:"status"`
	UserAgent  string        `json:"user_agent"`
	Backoff    time.Duration `gorm:"column:backoff;type:int;default:0" json:"backoff"`
	CreatedAt  time.Time
}

type JWTKey struct {
	AccessPrivateKey  string `json:"access_private_key"`
	AccessPublicKey   string `json:"access_public_key"`
	RefreshPrivateKey string `json:"refresh_private_key"`
	RefreshPublicKey  string `json:"refresh_public_key"`
}

type JWTUserInfo struct {
	UID     string  `json:"uid"`
	Email   string  `json:"email"`
	Grade   float64 `json:"grade"`
	IdToken string  `json:"idToken"`
}

type JWTToken struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
	AccessId     string `json:"access_id"`
	RefreshId    string `json:"refresh_id"`
	AtExpires    int64  `json:"access_expires"`
	RtExpires    int64  `json:"refresh_expires"`
}

type Session struct {
	ID         uint   `gorm:"primaryKey;column:id" json:"id"`
	UID        string `gorm:"column:uid;type:varchar(100)" json:"uid"`
	TokenValue string `gorm:"column:token_value;type:mediumtext" json:"token_value"`
	Expires    int64  `gorm:"column:expires" json:"expires"`
}
