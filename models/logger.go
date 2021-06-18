package models

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
