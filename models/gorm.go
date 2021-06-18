package models

// DB 접속 정보
type Database struct {
	Host     string
	Port     string
	Name     string
	User     string
	Password string
	Tables   map[string]string
}
