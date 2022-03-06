package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/teris-io/shortid"
)

type shortURL struct {
	Id      string `json:"Id"`
	LongURL string `json:"LongUrl"`
}

var urls = []shortURL{}

func HandleShortUrlRedirect(c *gin.Context) {
	shortUrlId := c.Param("id")

	for _, url := range urls {
		println(url.LongURL)
		if url.Id == shortUrlId {
			c.Redirect(302, url.LongURL)
			return
		} else {
			println("Could not find")
		}
	}
}

func postURL(c *gin.Context) {
	sid, _ := shortid.Generate()

	var newURL shortURL

	if err := c.BindJSON(&newURL); err != nil {
		return
	}

	newURL.Id = sid
	// Add the new album to the slice.
	urls = append(urls, newURL)
	c.IndentedJSON(http.StatusCreated, newURL)
}

func main() {
	router := gin.Default()
	router.GET("/:id", HandleShortUrlRedirect)
	router.POST("/", postURL)

	router.Run("localhost:8080")
}
