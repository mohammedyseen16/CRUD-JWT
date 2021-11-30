import React from "react";
import { Redirect, Route } from "react-router-dom";
import ToDoList from "../To-Do-List";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }  
    />
  );
}

export default ProtectedRoute;
