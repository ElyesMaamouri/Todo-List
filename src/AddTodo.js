import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handeleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodos(this.state);
    // empty input
    this.setState({
      content: "",
    });
  };

  handelChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handeleSubmit}>
        <label>Add new Job's</label>
        <input
          type="text"
          onChange={this.handelChange}
          //empty input
          value={this.state.content}
        />
        <button>Click</button>
      </form>
    );
  }
}

export default AddTodo;
