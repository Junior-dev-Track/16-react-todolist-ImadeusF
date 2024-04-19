import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const initialTodos = [
    { id: 1, text: "My first todo", completed: false },
    { id: 2, text: "My second todo", completed: false },
    { id: 3, text: "My third todo", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, // Updating todo in changing state
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <div>
        <h1>Imadeus Todo List</h1>
        <input type="text" name="todo" id="todo" placeholder="Add a new todo" />
        <button className="btn">Add a to do</button>
        <hr></hr>
        <h2>My Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {/* Assign a unique key to each list item */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />{" "}
              {/* Add a space between button and text */}
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
