import React from "react";
import Item from "./Item";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const TodoList = ({ todoList, completeTodo, deleteTodo }) => (
  <div className="todo-list">
    <Card style={{ background: "#f8f8f8" }}>
      <CardContent>
        <Typography
          style={{ textAlign: "left", marginBottom: 10 }}
          color="textSecondary">
          <strong style={{ textAlign: "left" }}>TODOS:</strong>
        </Typography>
        <div className="list-wrapper">
          {todoList.map(todo => (
            <Item
              key={todo.id}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              {...todo}
            />
          ))}
          {!todoList.length ? <span>Your list is empty!!!</span> : null}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default TodoList;
