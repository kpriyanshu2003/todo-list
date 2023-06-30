import { useState } from "react";

export default function Add(props) {
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task.length > 0) {
      const initData = JSON.parse(localStorage.getItem("todo"));
      const id = new Date().getTime();
      const data = { id: id, title: task };
      initData.push(data);
      localStorage.setItem("todo", JSON.stringify(initData));
      setTask("");
      props.updatePending(initData.length);
    } else alert("Enter something");
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        name=""
        id=""
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        className="border outline-none bg-transparent w-full p-2 rounded-sm"
      />
      <div
        className="border p-2 bg-violet-500 ml-1 rounded-sm cursor-pointer hover:bg-violet-600"
        onClick={() => addTask()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
}
