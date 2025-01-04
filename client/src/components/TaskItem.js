import React from "react";

const TaskItem = ({ task, toggleTask }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: task.done ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => toggleTask(task.id)}>
        {task.done ? "Undo" : "Done"}
      </button>
    </div>
  );
};

export default TaskItem;
