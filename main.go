package main

import (
	"github.com/rebornist/hanbit_v1.0/rest"

	"github.com/sirupsen/logrus"
)

func main() {
	logrus.Println("Main log...")
	logrus.Fatal(rest.RunAPI(":1323"))
}
