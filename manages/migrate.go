package manages

import (
	"github.com/rebornist/hanbit_v1.0/configs"
	"github.com/rebornist/hanbit_v1.0/models"
)

func Migrate() error {
	// db connect
	db := configs.ConnectDb()

	user := new(models.User)
	// logger := new(mixins.Logger)
	// board := new(boards.Board)
	// gallary := new(gallaries.Gallary)
	// image := new(images.Image)
	// sermon := new(sermons.Sermon)
	// post := new(configs.Post)
	// broadcast := new(sermonbroadcasts.Broadcast)

	// Migrate the schema
	if err := db.AutoMigrate(&user); err != nil {
		return err
	}

	// if err := db.AutoMigrate(&sermon); err != nil {
	// 	return err
	// }

	// if err := db.AutoMigrate(&image); err != nil {
	// 	return err
	// }

	// if err := db.AutoMigrate(&board); err != nil {
	// 	return err
	// }

	// if err := db.AutoMigrate(&gallary); err != nil {
	// 	return err
	// }

	// if err := db.AutoMigrate(&post); err != nil {
	// 	return err
	// }

	// if err := db.AutoMigrate(&logger); err != nil {
	// 	return err
	// }

	// if err := db.AutoMigrate(&broadcast); err != nil {
	// 	return err
	// }

	return nil
}
