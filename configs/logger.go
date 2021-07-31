package configs

import (
	"fmt"
	"os"
	"time"

	"github.com/rebornist/hanbit_v1.0/models"

	"github.com/sirupsen/logrus"
)

/* ... logger 초기화 */
var logger = logrus.New()

func CreateLogger(logger *logrus.Entry, status int, message string) {

	// Log as JSON instead of the default ASCII formatter.
	logrus.SetFormatter(&logrus.JSONFormatter{})

	// Output to stdout instead of the default stderr
	// Can be any io.Writer, see below for File example
	logrus.SetOutput(os.Stdout)

	// Only log the warning severity or above.
	logrus.SetLevel(logrus.WarnLevel)

	logConf := models.Logger{
		Backoff:    time.Second,
		Body:       fmt.Sprintf("%s", logger.Data["body"]),
		ConnectIp:  fmt.Sprintf("%s", logger.Data["connect_ip"]),
		RequestId:  fmt.Sprintf("%s", logger.Data["request_id"]),
		RequestUrl: fmt.Sprintf("%s", logger.Data["request_url"]),
		Status:     status,
		UserAgent:  fmt.Sprintf("%s", logger.Data["user_agent"]),
		CreatedAt:  time.Now(),
	}

	log := logger.WithFields(logrus.Fields{
		"backoff":     logConf.Backoff,
		"body":        logConf.Body,
		"created":     logConf.CreatedAt,
		"IP":          logConf.ConnectIp,
		"request-id":  logConf.RequestId,
		"request-url": logConf.RequestUrl,
		"status":      logConf.Status,
		"user-agent":  logConf.UserAgent,
	})

	if message != "" {
		log.Error(message)
		errorLogOutput(log, message)
	} else {
		log.Info("")
		accessLogOutput(log)
	}

}

// access log 정보 파일에 저장
func accessLogOutput(log *logrus.Entry) error {

	// You could set this to any `io.Writer` such as a file
	_, week := time.Now().ISOWeek()
	accessFile, err := os.OpenFile(fmt.Sprintf("log/access_%d.log", week), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		return fmt.Errorf("%s", "Failed to log to file, using default stderr")
	}
	logger.Out = accessFile

	log.Info("")

	return nil
}

// error log 정보 파일에 저장
func errorLogOutput(log *logrus.Entry, message string) error {

	// You could set this to any `io.Writer` such as a file
	_, week := time.Now().ISOWeek()
	errorFile, err := os.OpenFile(fmt.Sprintf("log/error_%d.log", week), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		return fmt.Errorf("%s", "Failed to log to file, using default stderr")
	}
	logger.Out = errorFile

	log.Error(message)

	return nil
}
