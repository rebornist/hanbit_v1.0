package rest

import (
	"github.com/rebornist/hanbit_v1.0/middlewares"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func RunAPI(address string) error {

	h, err := NewHandler()
	if err != nil {
		return err
	}
	return RunAPIWithHandler(address, h)

}

func RunAPIWithHandler(address string, h HandlerInterface) error {
	//Get echo's default engine
	e := echo.New()

	// echo 중 기본 미들웨어 세팅
	e.Use(middleware.RequestID()) // 각 request마다 고유의 ID를 부여
	e.Use(middleware.Recover())
	e.Use(middleware.Secure())
	e.Use(middlewares.LogrusLogger())

	e.GET("/", h.GetAllUsers)

	return e.Start(address)
}
