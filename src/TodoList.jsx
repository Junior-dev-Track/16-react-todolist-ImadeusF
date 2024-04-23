import React, { useState } from "react";
import "./App.css";
import "./TodoList.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

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

  const handleInputchange = (e) => {
    setAddTask(e.target.value);
  };
  /*
  const toggleStyle = (text, done) => {
    return done ? <s>{text}</s> : text;
  };
*/
  return (
    <>
      <div>
        <h1>Imadeus Todo List</h1>
        <TaskForm handleAdd={handleAdd} />
        <h2>My Todos</h2>
        <ul>
          {todos.map((todo) => (
            <Task taskInfo={todo} onTaskDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
