package router

import (
	"Miniproject/middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/movie", middleware.GetAllMovies).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/movie", middleware.CreateMovie).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/movie/{id}", middleware.MovieComplete).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/undoMovie/{id}", middleware.UndoMovie).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/deleteMovie/{id}", middleware.DeleteMovie).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/deleteAllMovie", middleware.DeleteAllMovie).Methods("DELETE", "OPTIONS")

	return router
}
