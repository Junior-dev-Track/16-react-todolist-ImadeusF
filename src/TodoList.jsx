import React, { useState, useEffect } from "react";
import "./App.css";
import "./TodoList.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

const LSKEY = "MyTodoApp";

const TodoList = () => {
  // We retrieve info if there is data in the localstorage
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem(LSKEY + ".todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const handleDelete = (id) => {
    const todoCopy = [...todos];
    const todoCopUpdated = todoCopy.filter((todo) => todo.id !== id);
    setTodos(todoCopUpdated);
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

  const handleAdd = (tasktoAdd) => {
    //1. copy du state
    const taskCopy = [...todos];
    //2. manipulation sur la copie
    taskCopy.push(tasktoAdd);
    //3. modification avec setter
    setTodos(taskCopy);
  };

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div>
        <h1>Imadeus Todo List</h1>
        <TaskForm handleAdd={handleAdd} />
        <h2>My Todos</h2>
        <ul>
          {todos.map((todo) => (
            <Task
              taskInfo={todo}
              onTaskDelete={handleDelete}
              handleCheck={handleCheck}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
