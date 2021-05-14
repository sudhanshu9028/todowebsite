import React from "react";
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  let todoStyle = {
    marginright: "150px",
    marginleft: "250px",
    width: "1024px",
    minHeight: "45vh",
    margin: "15px auto",
  };
  return (
    <div className="container" style={todoStyle}>
      <h3 className="my-3">Your Todos</h3>
      {props.todos.length === 0
        ? "No todos"
        : props.todos.map((todo) => {
            return (
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};