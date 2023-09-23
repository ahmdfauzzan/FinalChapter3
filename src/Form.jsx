import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Form = (props) => {
  const [name, setname] = useState("");
  const [search, setSearch] = useState(""); // State for search

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const newItem = { name: name, checked: false, id: Date.now() };

    props.onAddItem(newItem);

    console.log(newItem);

    setname("");
  };

  const handleSearch = () => {
    props.onSearch(search);
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center rounded-lg border w-[95%]">
          <div className="flex justify-between w-[100%]">
            <div className="flex items-center w-[45%] ml-5">
              <i className="bg-[#16a3b5] text-white p-2">
                <FaSearch style={{ fontSize: "1rem" }} />
              </i>
              <input
                className="border w-[100%] mt-5 mb-5 h-9"
                type="text"
                placeholder="Search Todo"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <input className="border w-[35%] m-5 h-9" type="text" placeholder="New Todo" value={name} onChange={(e) => setname(e.target.value)} />
          </div>

          <div className="flex justify-between w-[100%]">
            <button
              className="w-[45%] h-[35px] ml-5 mb-5 rounded-md bg-[#16a3b5] text-white border-black font-light"
              onClick={handleSearch} 
            >
              Search
            </button>
            <button className="w-[35%] h-[35px] mr-5 mb-5 rounded-md bg-[#16a3b5] text-white border-black font-light">Add new Task</button>
          </div>
        </form>
      </div>
    </>
  );
};
