import React, { useEffect, useState, useRef } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";

export const ListItems = ({ data, search, onDeleteItem, onCheckedItem, onClearItems, onEditItem, onDeleteDoneItem, onAllItem, onDoneItem }) => {
  const [OnEditItem, setOnEditItem] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (OnEditItem !== null) {
      inputRef.current.focus();
    }
  }, [OnEditItem]);

  const handleEditInputChange = (e) => {
    setEditedItemName(e.target.value);
  };

  const handleSaveEdit = () => {
    if (editedItemName.trim() !== "") {
      onEditItem(OnEditItem, editedItemName);
      setOnEditItem(null);
    }
  };

  // Filter items based on search query
  const filteredData = data.filter((item) => {
    return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="flex h-[500px] flex-col items-center overflow-y-auto">
        <div>
          <h1 className="font-medium text-2xl m-2">TodoList</h1>
        </div>
        <div className="w-[95%] flex justify-between mb-6">
          <button className="w-[30%] h-[35px] rounded-sm bg-[#16a3b5] text-white border-black font-light" onClick={onAllItem}>
            All
          </button>
          <button className="w-[30%] h-[35px] rounded-sm bg-[#16a3b5] text-white border-black font-light" onClick={onDoneItem}>
            Done
          </button>
          <button className="w-[30%] h-[35px] rounded-sm bg-[#16a3b5] text-white border-black font-light" onClick={onDeleteDoneItem}>
            Todo
          </button>
        </div>
        <ul className="w-[95%] mt-5">
          {filteredData.map((item) => (
            <li key={item.id} className="w-[100%] border mb-3 h-[50px] flex justify-between items-center">
              {OnEditItem === item.id ? (
                <>
                  <input className="ml-5 h-[100%] w-[80%]" ref={inputRef} type="text" value={editedItemName || item.name} onChange={handleEditInputChange} />
                  <button className="mr-5 font-semibold" onClick={handleSaveEdit}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="ml-5" style={item.checked ? { textDecoration: "line-through" } : {}}>
                    {item.name}
                  </span>
                  <div className="mr-5 space-x-2">
                    <input type="checkbox" checked={item.checked} onChange={() => onCheckedItem(item.id)} />
                    <button onClick={() => setOnEditItem(item.id)}>
                      <MdModeEditOutline className="text-yellow-500" />
                    </button>
                    <button onClick={() => onDeleteItem(item.id)}>
                      <BiSolidTrashAlt className="text-red-600" />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex justify-between w-[95%]">
          <button className="bg-red-600 w-[48%] h-[35px] text-white rounded-md" onClick={onDeleteDoneItem}>
            Delete done tasks
          </button>
          <button className="bg-red-600 w-[48%] h-[35px] text-white rounded-md" onClick={onClearItems}>
            Delete all tasks
          </button>
        </div>
      </div>
    </>
  );
};
