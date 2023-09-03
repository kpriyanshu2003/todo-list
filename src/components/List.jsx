import React from "react";

export default function List(props) {
  let items;
  if (props.items && props.items.length > 0) {
    items = props.items.map((task) => (
      <div
        key={task._id}
        className="flex items-center mb-2 border w-full overflow-auto"
      >
        <span className="w-full p-2 bg-slate-200 cursor-default hover:bg-slate-300 transition-all">
          {task.title}
        </span>
        <div
          className="bg-red-600 p-2 cursor-pointer hover:bg-red-700 transition-all"
          onClick={() => props.updateDelete(task._id)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    ));
  } else {
    items = <div className="text-center font-light">No task added</div>;
  }
  return <div className="w-full">{items}</div>;
}
