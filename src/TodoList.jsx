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

  const handleDelall = () => {
    const taskstodelete = todos.filter((todo) => !todo.done);
    setTodos(taskstodelete);
  };

  // Activate the button and change color if at least 2 task checked
  const checkedCount = todos.filter((todo) => todo.done).length;
  const btnclass = checkedCount >= 2 ? "btndelallactive" : "btndelall";

  return (
    <>
      <div>
        <h1>Imadeus Todo List</h1>
        <TaskForm handleAdd={handleAdd} />
        <h2>My Todos ({todos.length})</h2>
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
        <div>
          <p>
            Todo still needs to be completed :{" "}
            {todos.filter((todo) => !todo.done).length}
          </p>
        </div>
        <div>
          <button className={btnclass} onClick={handleDelall}>
            Delete all the ckecked tasks
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
