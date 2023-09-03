import React, { useState, useEffect } from "react";
import Add from "./Add";
import List from "./List";
import Logo from "../favicon.ico";
import axios from "axios";

export default function Main() {
  const [pending, setPending] = useState(0);
  const [items, setItems] = useState([]);
  const updatePending = (n) => {
    setPending(n);
  };

  const updateDelete = async (id) => {
    if (pending > 0) {
      await axios.delete(`${process.env.REACT_APP_URL}/${id}`);
      fetchData();
    }
  };
  const updateAdd = async (task) => {
    await axios.post(process.env.REACT_APP_URL, { title: task });
    fetchData();
  };

  const updateEdit = async (id, task) => {
    await axios.put(`${process.env.REACT_APP_URL}/${id}`, { title: task });
    fetchData();
  };

  const fetchData = async () => {
    axios.get(process.env.REACT_APP_URL).then((res) => {
      setItems(res.data.data);
      updatePending(res.data.data.length);
    });
  };
  useEffect(() => {
    fetchData();
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
          <Add updateAdd={updateAdd} />
        </div>
        <div className="h-2/3 overflow-auto scrollbar-hide">
          <List
            items={items}
            updateDelete={updateDelete}
            updateEdit={updateEdit}
          />
        </div>
      </div>
    </div>
  );
}
