package main

import (
	"html/template"
	"io"

	"github.com/rebornist/hanbit_v1.0/configs"
	"github.com/rebornist/hanbit_v1.0/mixins"

	"github.com/rebornist/hanbit_v1.0/controllers/api/home"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// TemplateRenderer is a custom html/template renderer for Echo framework
type TemplateRenderer struct {
	templates *template.Template
}

// Render renders a template document
func (t *TemplateRenderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {

	// Add global methods if data is a map
	if viewContext, isMap := data.(map[string]interface{}); isMap {
		viewContext["reverse"] = c.Echo().Reverse
	}

	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	db := configs.ConnectDb()

	e := echo.New()
	renderer := &TemplateRenderer{
		templates: template.Must(template.ParseGlob("public/*.html")),
	}
	e.Renderer = renderer
	// 각 request마다 고유의 ID를 부여
	e.Use(middleware.RequestID())
	e.Use(middleware.Recover())
	e.Use(middleware.Secure())
	e.Use(mixins.DbContext(db))
	e.Use(mixins.LogrusLogger())

	home.HomeRouter(e)

	e.Logger.Fatal(e.Start(":1323"))
}
