package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func reader(conn *websocket.Conn) {
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		log.Println(string(p))
		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}

// func homepage(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprint(w, "Homepage")
// }
func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}
	log.Println("Client Successfully Connected...")
	reader(ws)
}

func onCapture(w http.ResponseWriter, r *http.Request) {
	log.Println("On Capture")
}
func setupRoutes() {
	// http.HandleFunc("/", homepage)
	http.HandleFunc("/ws", wsEndpoint)
}

func main() {
	fmt.Println("Websockets")
	setupRoutes()
	log.Fatal(http.ListenAndServe(":6060", nil))
}
