package models

import (
	"time"
)

type User struct {
	ID          uint      `gorm:"column:id;not null;unique" json:"id"`
	UID         string    `gorm:"primaryKey;column:uid;type:varchar(100)" json:"uid"`
	Password    string    `gorm:"column:password;type:varchar(150)" json:"password"`
	Name        string    `gorm:"column:name;type:varchar(100);default:''" json:"name"`
	Email       string    `gorm:"column:email;type:varchar(150);default:''" json:"email"`
	Age         uint8     `gorm:"column:age;size:3;default:0" json:"age"`
	Birthday    string    `gorm:"column:birthday;type:varchar(150);default:''" json:"birthday"`
	PhoneNumber string    `gorm:"column:phone_number;type:varchar(100);default:''" json:"phone_number"`
	Grade       uint8     `gorm:"column:grade;size:1;default:0" json:"grade"`
	Mobile      string    `gorm:"column:mobile;type:varchar(100);default:''" json:"mobile"`
	Photo       string    `gorm:"column:photo;type:text" json:"photo"`
	Content     string    `gorm:"column:content;type:text" json:"content"`
	CreatedAt   time.Time `gorm:"column:created_at" json:"created_at"`
	UpdatedAt   time.Time `gorm:"column:updated_at" json:"updated_at"`
}
