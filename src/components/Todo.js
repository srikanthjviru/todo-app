import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, completeTodo, getTodos } from "../actions";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "./App.css";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getTodos());
  }
  createTodo = task => {
    this.props.dispatch(addTodo(task));
  };
  deleteTodo = id => {
    debugger;
    this.props.dispatch(deleteTodo(id));
  };

  completeTodo = id => {
    this.props.dispatch(completeTodo(id));
  };
  render() {
    const { todoList = [] } = this.props.todoData;
    return (
      <div className="container">
        <h3>Welcome To TO-DO app</h3>
        <TodoForm count={todoList.length} createTodo={this.createTodo} />
        <TodoList
          todoList={todoList}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoData: state.todoData
  };
};

export default connect(mapStateToProps)(Home);
