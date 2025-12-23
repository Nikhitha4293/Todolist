import React, { useState } from "react";

function TodoInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
