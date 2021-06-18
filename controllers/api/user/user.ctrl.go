package user

import (
	"net/http"

	"github.com/rebornist/hanbit_v1.0/controllers/common"
	"github.com/rebornist/hanbit_v1.0/middlewares"

	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
)

func StatusView(c echo.Context) error {
	db := c.Request().Context().Value("DB").(*gorm.DB)
	logger := c.Request().Context().Value("LOG").(*logrus.Entry)

	var resp common.Response

	userInfo, err := common.CheckStatus(c, db)
	if err != nil {
		resp.Code = http.StatusUnauthorized
		resp.Message = "Non User"
		resp.Data = map[string]interface{}{"email": "", "uid": "", "grade": 0, "isLoggedIn": false}
		middlewares.CreateLogger(db, logger, resp.Code, err)
		return c.JSON(resp.Code, resp)
	}

	resp.Code = http.StatusOK
	resp.Message = "signin sucessful"
	resp.Data = map[string]interface{}{"email": userInfo.Email, "uid": userInfo.UID, "grade": int(userInfo.Grade), "isLoggedIn": true}

	return c.JSON(http.StatusOK, resp)
}
