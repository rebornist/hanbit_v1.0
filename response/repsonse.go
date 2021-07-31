package response

import (
	"net/http"

	"github.com/rebornist/hanbit_v1.0/configs"

	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
)

// 응답 처리 기능의 모든 메서드를 포함
type ResponseInterface interface {
	ErrorResponse(c echo.Context) error
	SuccessResponse(c echo.Context) error
}

// 응답 처리 기능 구조체 정의
type Response struct {
	Code    int                    `json:"code"`
	Message string                 `json:"message"`
	Data    map[string]interface{} `json:"data"`
}

func (r *Response) ErrorResponse(c echo.Context, err error) error {
	logger := c.Request().Context().Value("LOG").(*logrus.Entry)
	r.Code = http.StatusInternalServerError
	r.Message = "에러가 발생했습니다. 관리자에게 문의해주세요."
	configs.CreateLogger(logger, r.Code, err.Error())
	return c.JSON(r.Code, r)
}
