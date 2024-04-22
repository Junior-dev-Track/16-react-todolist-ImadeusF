import React, { useState } from "react";
/*import { useRef } from "react";*/
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [addTask, setAddTask] = useState("");
  /*const inputRef = useRef();*/

  const addNewtask = () => {
    if (addTask.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        /*name: inputRef.current.value,*/
        name: addTask,
        done: false,
      };

      setTodos([...todos, newTodo]);
      /*inputRef.current.value = "";*/
      setAddTask("");
    }
  };

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, // Updating todo in changing state
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };
  /* si hook ref, pas besoin de handleInputchange */
  const handleInputchange = (e) => {
    setAddTask(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Imadeus Todo List</h1>
        <input
          type="text"
          /*ref={inputRef}*/
          value={addTask}
          name="todo"
          id="todo"
          placeholder="Add a new todo"
          onChange={handleInputchange}
        />
        <button className="btn" onClick={addNewtask}>
          Add a to do
        </button>
        <hr></hr>
        <h2>My Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {/* Assign a unique key to each list item */}
              <input
                type="checkbox"
                id={todo.id}
                name={todo.name}
                checked={todo.done}
                onChange={() => handleCheck(todo.id)}
              />{" "}
              {/* Add a space between button and text */}
              {todo.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
