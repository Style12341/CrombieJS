import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const addNewTask = () => {
    if (input === "") return;
    setTasks([...tasks, input]);
    setInput("");
  }
  return (
    <div>
      <h1>Tasks</h1><div style={{ display: "flex",justifyContent:"center", gap: "10px", paddingBottom: "10px" }}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addNewTask()}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "left", alignItems: "center", gap: "10px" }}>
            <li key={index}>{task}</li>
            <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  )
} export default Tasks