import { useState } from "react";

export default function TaskForm({ handleAdd }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    //On evite le rechargement de la page
    event.preventDefault();

    //2. manipulation sur la copie
    const id = new Date().getTime();
    const nom = newTask;
    const tasktoAdd = { id, name: nom, done: false };
    //3. modification avec setter
    //on vide l'input
    handleAdd(tasktoAdd);
    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={newTask}
        type="text"
        placeholder="Add a new todo"
        onChange={handleChange}
      />
      <button>Ajouter +</button>
    </form>
  );
}
