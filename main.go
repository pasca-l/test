package main

import (
	"flag"
	"fmt"
)

func main() {
	filename := flag.String("filename", "yyyymmdd", "filename without extension")
	flag.Parse()

	fmt.Println(*filename)
}
