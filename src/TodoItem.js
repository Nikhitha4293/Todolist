import React, { useState } from "react";

function TodoItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, text);
    setIsEdit(false);
  };

  return (
    <li className={task.completed ? "done" : ""}>
      {isEdit ? (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTask(task.id)}>
            {task.text}
          </span>
          <div>
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
