package main

import (
	"fmt"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello, World!")
}
func segundaRota(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Esta é a segunda rota!")
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/segunda", segundaRota)
	fmt.Println("Servidor rodando na porta 8080...")
	http.ListenAndServe(":8080", nil)
}
