import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "go to scholl" },
    ],
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todoList = [...this.state.todos, todo];

    this.setState({
      todos: todoList,
    });
  };

  deleteTodo = (id) => {
    let todoRemoved = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: todoRemoved,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center bleu-text">Todo's</h1>
        <Todos listTodos={this.state.todos} removeTodo={this.deleteTodo} />
        <AddTodo addTodos={this.addTodo} />
      </div>
    );
  }
}

export default App;
