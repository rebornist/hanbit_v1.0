package home

import "github.com/labstack/echo/v4"

func HomeRouter(e *echo.Echo) {
	e.GET("/", HomeView)
}
