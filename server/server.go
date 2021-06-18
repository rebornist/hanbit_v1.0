package main

import (
	"path/filepath"

	"github.com/rebornist/hanbit_v1.0/configs"
	"github.com/rebornist/hanbit_v1.0/middlewares"

	"github.com/rebornist/hanbit_v1.0/controllers/api/home"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/flosch/pongo2"
	"github.com/stnc/pongo2echo"
)

var (
	data         = pongo2.Context{}
	mainRenderer = pongo2echo.Renderer{Debug: true} // use any renderer
)

func main() {
	db := configs.ConnectDb()

	e := echo.New()

	e.Renderer = mainRenderer //pongo2 init

	staticFiles := e.Group("/static")
	staticFiles.Use(middleware.Static(filepath.Join("static")))

	// 각 request마다 고유의 ID를 부여
	e.Use(middleware.RequestID())
	e.Use(middleware.Recover())
	e.Use(middleware.Secure())
	e.Use(middlewares.DbContext(db))
	e.Use(middlewares.LogrusLogger())

	home.HomeRouter(e)

	e.Logger.Fatal(e.Start(":1323"))
}
