import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import "./App.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      todoText: ""
    };
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({
      todoText: value
    });
  };

  createTodo = e => {
    const { todoText } = this.state;
    const { count, createTodo } = this.props;
    if (!todoText) {
      return this.setState({
        error: true
      });
    } else {
      const data = {
        id: `${count + 1}${todoText}`,
        title: todoText,
        completed: false
      };
      createTodo(data);
      this.setState({
        todoText: "",
        error: false
      });
    }
  };

  render() {
    const { error, todoText } = this.state;
    return (
      <div className="todo-form">
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              <strong>TO-DO:</strong>
            </Typography>
            <TextField
              id="name"
              label=""
              value={todoText}
              autoFocus={true}
              onChange={this.onChange}
              margin="normal"
              error={error}
              fullWidth
            />
            {error ? (
              <span style={{ color: "red", fontSize: 12 }}>
                This is required
              </span>
            ) : null}
          </CardContent>
          <CardActions>
            <Button onClick={this.createTodo} variant="raised" color="primary">
              Add new To-Do
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default TodoForm;
