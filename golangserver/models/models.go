package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type ToDoList struct {
	ID           primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Movie        string             `json:"movie,omitempty"`
	Director     string             `json:"director,omitempty"`
	Release_Date string             `json:"release_date,omitempty"`
	Language     string             `json:"language,omitempty"`
	Description  string             `json:"description,omitempty"`
	Status       bool               `json:"status,omitempty"`
}
