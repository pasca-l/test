package main

import (
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	filename := flag.String("filename", "yyyymmdd", "filename without extension")
	flag.Parse()

	url := "https://qiita.com/api/v2/authenticated_user/items"
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set(
		"Authorization",
		fmt.Sprintf("Bearer %s", os.Getenv("API_TOKEN")),
	)

	client := new(http.Client)
	res, err := client.Do(req)
	if err != nil {
		return
	}
	defer res.Body.Close()

	result, _ := io.ReadAll(res.Body)
	fmt.Println(string(result))

	fmt.Println(*filename)
}
