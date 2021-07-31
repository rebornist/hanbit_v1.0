package dblayer

import "github.com/rebornist/hanbit_v1.0/models"

// 한빛교회 유저 관리 기능을 캡슐화
type DBLayer interface {
	GetAllUsers() ([]models.User, error)
}
