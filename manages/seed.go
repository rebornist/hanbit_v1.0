package manages

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"time"

	"github.com/rebornist/hanbit_v1.0/configs"
	"github.com/rebornist/hanbit_v1.0/controllers/common"
)

func Seed(number, table string) error {
	// db connect
	db := configs.ConnectDb()

	// 해당 테이블 데이터 개수 체크
	var cnt int64
	if err := db.Table(table).Count(&cnt).Error; err != nil {
		return err
	}

	// 전달받은 번호 INT 형으로 변환
	n, err := strconv.ParseUint(number, 10, 64)
	if err != nil {
		return err
	}

	// Media 정보 불러오기
	getInfo, err := configs.GetServiceInfo("media")
	if err != nil {
		return err
	}

	// 사진 경로 불러오기
	images, err := ioutil.ReadDir(string(getInfo))
	if err != nil {
		return err
	}

	// 데이터 생성
	for i := 0; i < int(n); i++ {
		if err := db.Table(table).Create(map[string]interface{}{
			"id":         i + 1,
			"photo":      images[i].Name(),
			"title":      fmt.Sprintf("sermon title %d", i+1),
			"content":    fmt.Sprintf("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. %d", i+1),
			"created_at": time.Now(),
			"updated_at": time.Now(),
		}).Error; err != nil {
			return err
		}
	}

	return nil
}

func SeedPost(table string) error {
	// db connect
	db := configs.ConnectDb()
	posts := map[int]string{
		0: "sermons",
		1: "gallaries",
		2: "boards",
		3: "images",
		4: "loggers",
		5: "broadcasts",
	}

	for i := 0; i < len(posts); i++ {
		id := common.CreateRandomString(16)
		if err := db.Table(table).Create(map[string]interface{}{
			"id":         id,
			"number":     uint(i + 1),
			"title":      posts[i],
			"created_at": time.Now(),
		}).Error; err != nil {
			return err
		}
	}

	return nil

}
