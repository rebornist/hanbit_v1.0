package rest

import (
	"errors"
	"net/http"

	"github.com/rebornist/hanbit_v1.0/configs/dblayer"
	"github.com/rebornist/hanbit_v1.0/response"

	"github.com/labstack/echo/v4"
)

// 핸들러 전체 메서드 포함 인터페이스
type HandlerInterface interface {
	GetAllUsers(c echo.Context) error
}

// 핸들러 구조체 정의
type Handler struct {
	db dblayer.DBLayer
	r  *response.Response
}

// 생성자 선언
func NewHandler() (HandlerInterface, error) {
	return NewHandlerWithParams("")
}

func NewHandlerWithParams(dsn string) (HandlerInterface, error) {
	db, err := dblayer.NewORM(dsn)
	if err != nil {
		return nil, err
	}
	return &Handler{db: db, r: new(response.Response)}, nil
}

func NewHandlerWithDB(db dblayer.DBLayer) HandlerInterface {
	return &Handler{db: db}
}

// 테스트 API 구현
func (h *Handler) GetAllUsers(c echo.Context) error {
	if h.db == nil {
		return errors.New("database is not connection")
	}
	hello, err := h.db.GetAllUsers()
	if err != nil {
		return h.r.ErrorResponse(c, err)
	}

	return c.JSON(http.StatusOK, map[string]interface{}{"data": hello})
}
