package main

import "fmt"

func main() {
	filename := flag.String("filename", "yyyymmdd")
	flag.Parse()

	fmt.Println(*filename)
}
