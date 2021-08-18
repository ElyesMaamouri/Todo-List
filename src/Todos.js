import React from "react";

const Todo = ({ listTodos }) => {
  return (
    <div className="todo collection">
      {listTodos.length !== 0 &&
        listTodos.map((item) => {
          return (
            <div className="collection-item" key={item.id}>
              <span>{item.content}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
