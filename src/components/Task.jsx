export default function Task({ taskInfo, onTaskDelete }) {
  //affichage (render)
  return (
    <li key={taskInfo.id}>
      {/* Assign a unique key to each list item */}
      <input
        type="checkbox"
        id={taskInfo.id}
        name={taskInfo.name}
        checked={taskInfo.done}
        onChange={() => handleCheck(taskInfo.id)}
      />{" "}
      <div className="Taskname">
        {/* Add a space between button and text */}
        {/*toggleStyle(taskInfo.name, taskInfo.done)*/}
        {taskInfo.name}
      </div>
      <div className="container_btn">
        <button className="btnedit" onClick={() => editTask(taskInfo.id)}>
          Edit
        </button>
        <button className="btndel" onClick={() => onTaskDelete(taskInfo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
