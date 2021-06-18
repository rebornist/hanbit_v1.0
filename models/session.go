package models

type Session struct {
	ID         uint   `gorm:"primaryKey;column:id" json:"id"`
	UID        string `gorm:"column:uid;type:varchar(100)" json:"uid"`
	TokenValue string `gorm:"column:token_value;type:mediumtext" json:"token_value"`
	Expires    int64  `gorm:"column:expires" json:"expires"`
}
