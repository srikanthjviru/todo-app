import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false
    };
  }

  render() {
    const { id, title, completed, deleteTodo, completeTodo } = this.props;
    return (
      <div className={`todo-item ${completed ? "completed" : ""}`}>
        <span>{title}</span>
        <span className="delete" onClick={deleteTodo.bind(this, id)}>
          X
        </span>
        <span
          className="complete"
          onClick={completed ? () => {} : completeTodo.bind(this, id)}>
          Complete
        </span>
      </div>
    );
  }
}

export default Item;
