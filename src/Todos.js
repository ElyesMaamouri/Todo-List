import React from "react";

const Todo = ({ listTodos, removeTodo }) => {
  return (
    <div className="todo collection">
      {listTodos.length !== 0 &&
        listTodos.map((item) => {
          return (
            <div className="collection-item" key={item.id}>
              <span
                onClick={() => {
                  removeTodo(item.id);
                }}
              >
                {item.content}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
