package user

import "github.com/labstack/echo/v4"

func UserRouter(e *echo.Echo) {
	e.GET("/", StatusView)
}
