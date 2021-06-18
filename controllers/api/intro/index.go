package intro

import "github.com/labstack/echo/v4"

func IntroRouter(e *echo.Echo) {
	e.GET("/intro", IntroView)
}
