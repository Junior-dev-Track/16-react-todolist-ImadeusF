export default function Task({ taskInfo, onTaskDelete, handleCheck }) {
  const toggleStyle = (text, done) => {
    return done ? <s>{text}</s> : text;
  };

  const btnclass = taskInfo.done ? "btndelactive" : "btndel";

  //affichage (render)
  return (
    <li>
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
        {toggleStyle(taskInfo.name, taskInfo.done)}
      </div>
      <div className="container_btn">
        {/*<button className="btnedit" onClick={() => editTask(taskInfo.id)}>
          Edit
  </button>*/}

        <button className={btnclass} onClick={() => onTaskDelete(taskInfo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
