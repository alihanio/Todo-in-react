import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelateTodo, onToggle, onUpdate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onDelateTodo={onDelateTodo}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
