import React, { Component } from "react";
import Todos from "./Todos";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "go to scholl" },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1 className="center bleu-text">Todo's</h1>
        <Todos listTodos={this.state.todos} />
      </div>
    );
  }
}

export default App;
