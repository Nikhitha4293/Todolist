import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleTask, editTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No Tasks Available</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
