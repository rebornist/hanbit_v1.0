package dblayer

import (
	"github.com/rebornist/hanbit_v1.0/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// DBLayer 인터페이스를 구현하는 구조체 정의
type DBORM struct {
	*gorm.DB
}

// 데이터베이스 이름과 연결 문자열을 하드코딩하지 않고 생성자에 인자로 전달
func NewORM(dsn string) (*DBORM, error) {
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	return &DBORM{
		DB: db,
	}, err
}

// 모든 유저 불러오기
func (db *DBORM) GetAllUsers() (users []models.User, err error) {
	return users, db.Find(&users).Error
}
