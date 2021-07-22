package customTypes

// LetsEncrypt 접속 정보
type Encrypt struct {
	Dir  string `json:"dir"`
	Cert string `json:"cert"`
	Key  string `json:"key"`
}
