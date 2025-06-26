package routers

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func SetupRouter() http.Handler {
	router := mux.NewRouter()
	SetupRouterListaCompras(router)

	router.PathPrefix("/").Handler(
		http.StripPrefix("/", http.FileServer(
			http.Dir("./static/"))))

	// Configuração de CORS
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
	})

	// Aplicar CORS ao router
	handler := c.Handler(router)

	return handler
}
