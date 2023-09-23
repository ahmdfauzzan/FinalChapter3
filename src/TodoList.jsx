import React, { useState } from "react";
import { Form } from "./Form";
import { ListItems } from "./ListItems";

export const TodoList = () => {
  const listItems = [
    {
      id: 1,
      name: "Learn ReactJS basies",
      checked: true,
    },
    {
      id: 2,
      name: "Practice ReactJS",
      checked: false,
    },
    {
      id: 3,
      name: "Learn Redux",
      checked: false,
    },
    {
      id: 4,
      name: "Nyuci mobil",
      checked: true,
    },
    {
      id: 5,
      name: "Memberi makan kucing",
      checked: true,
    },
    {
      id: 6,
      name: "Olahraga 10 menit",
      checked: false,
    },
    {
      id: 7,
      name: "Belanja harian",
      checked: true,
    },
  ];

  const [items, setItems] = useState(listItems);
  const [search, setSearch] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleAllItem = () => {
    const mergedItems = [...items, ...listItems.filter((listItem) => !items.some((item) => item.id === listItem.id))];

    setItems(mergedItems);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDoneItem = () => {
    const mergedItems = [...items, ...listItems.filter((listItem) => !items.some((item) => item.id === listItem.id))];

    setItems(mergedItems);
    setItems((items) => items.filter((item) => item.checked));
  };

  const handleDeleteDoneItem = () => {
    const mergedItems = [...items, ...listItems.filter((listItem) => !items.some((item) => item.id === listItem.id))];

    setItems(mergedItems);
    setItems((items) => items.filter((item) => !item.checked));
  };

  const handleCheckedItem = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const handleClearItems = () => {
    setItems([]);
  };

  const handleEditItem = (id, newName) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, name: newName } : item)));
  };

  return (
    <>
      <div className="flex justify-center h-[100vh] items-center">
        <div className="w-[50%] border-[15px] text-center rounded-xl">
          <h1 className="font-bold text-2xl mt-5 mb-2">Todo Search</h1>
          <Form onAddItem={handleAddItem} onSearch={setSearch} />
          <ListItems
            data={items}
            search={search}
            onDeleteItem={handleDeleteItem}
            onCheckedItem={handleCheckedItem}
            onClearItems={handleClearItems}
            onEditItem={handleEditItem}
            onDeleteDoneItem={handleDeleteDoneItem}
            onAllItem={handleAllItem}
            onDoneItem={handleDoneItem}
          />
        </div>
      </div>
    </>
  );
};
