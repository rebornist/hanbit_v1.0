package customType

// 공통 Responst type
type Response struct {
	Code       int                    `json:"code"`
	Message    string                 `json:"message"`
	Data       map[string]interface{} `json:"data"`
	Permission bool                   `json:"permission"`
}
