package middlewares

import (
	"context"
	"fmt"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
)

func LogrusLogger() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			/* ... logger 초기화 */
			var logger = logrus.New()

			logEntry := logrus.NewEntry(logger)
			data := make(map[string]interface{})

			// request_id를 가져와 logEntry에 세팅
			id := c.Request().Header.Get(echo.HeaderXRequestID)
			if id == "" {
				id = c.Response().Header().Get(echo.HeaderXRequestID)
			}

			// form data를 가져와 logEntry에 세팅
			var getBodyData []string
			values, _ := c.FormParams()
			for k, v := range values {
				value := fmt.Sprintf("%s: %s", k, strings.Join(v, "&"))
				getBodyData = append(getBodyData, value)
			}

			form, err := c.MultipartForm()
			if err != nil {
				if err.Error() != "request Content-Type isn't multipart/form-data" {
					return echo.NewHTTPError(http.StatusInternalServerError, err)
				}
			}
			if form != nil {
				files := form.File["photo"]
				for idx, file := range files {
					value := fmt.Sprintf("photo%03d: %s", idx, file.Filename)
					getBodyData = append(getBodyData, value)
				}
			}

			// logrus에 저장
			data["request_id"] = id
			data["body"] = strings.Join(getBodyData, ", ")
			data["connect_ip"] = c.RealIP()
			data["request_url"] = c.Request().URL.RequestURI()
			data["user_agent"] = c.Request().UserAgent()

			logEntry = logEntry.WithFields(data)
			// logEntry를 Context에 저장
			req := c.Request()
			c.SetRequest(req.WithContext(
				context.WithValue(
					req.Context(),
					"LOG",
					logEntry,
				),
			))

			return next(c)
		}
	}
}
