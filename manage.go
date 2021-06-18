package main

import (
	"errors"
	"os"

	"github.com/rebornist/hanbit_v1.0/manages"
)

func main() {
	typeName := os.Args[1]
	switch typeName {
	case "migrate":
		err := manages.Migrate()
		if err != nil {
			panic(err)
		}
	case "seed_sermon":
		number := os.Args[2]
		table := os.Args[3]
		if number == "" || table == "" {
			panic(errors.New("올바른 값을 입력해주세요."))
		}
		err := manages.Seed(number, table)
		if err != nil {
			panic(err)
		}
	case "seed_post":
		table := os.Args[3]
		err := manages.SeedPost(table)
		if err != nil {
			panic(err)
		}
	}
}
