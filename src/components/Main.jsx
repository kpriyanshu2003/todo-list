import { useEffect, useState } from "react";
import Add from "./Add";
import List from "./List";
import Logo from "../favicon.ico";

export default function Main() {
  const [pending, setPending] = useState(null);
  const updatePending = (n) => {
    setPending(n);
  };
  useEffect(() => {
    if (localStorage.getItem("todo") == null) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    setPending(JSON.parse(localStorage.getItem("todo")).length);
  }, []);
  return (
    <div className="bg w-screen h-screen flex justify-center items-center font-montserrat">
      <div className="lg:w-1/3 bg-white rounded-md h-1/2 p-4 relative shadow-md w-[90%]">
        <div className="flex items-center">
          <img src={Logo} alt="" className="w-12 h-12" />
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl ml-2 font-belanosima cursor-default">
              ToDo App
            </span>
            <span className="w-6 h-6 rounded-[50%] text-white flex items-center justify-center bg-gray-600 text-xs">
              {pending}
            </span>
          </div>
        </div>
        <div className="my-4">
          <Add updatePending={updatePending} />
        </div>
        <div className="h-2/3 overflow-auto scrollbar-hide">
          <List updatePending={updatePending} />
        </div>
      </div>
    </div>
  );
}
