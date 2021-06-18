package home

import (
	"net/http"

	"github.com/flosch/pongo2"
	"github.com/labstack/echo/v4"
)

func HomeView(c echo.Context) error {
	return c.Render(http.StatusOK, "templates/core/index.html", pongo2.Context{"title": "hello echo fw", "posts": "test"})
}
