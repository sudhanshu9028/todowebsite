import React from "react";

export const Todoitem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="container px-4">
        <div className="row my-3 gx-4">
          <div className="col border bg-light">
            <h4>{todo.title}</h4>
          </div>
          <div className="col border bg-light">{todo.desc}</div>
        </div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
        {/* <h4>{todo.title}</h4>
        <p>{todo.desc}</p> */}
      </div>
    </>
  );
};