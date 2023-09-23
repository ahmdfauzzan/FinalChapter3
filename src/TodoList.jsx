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

  //untuk menambah todo list
  const handleAddItem = (item) => {
    setItems([item, ...items]);
  };

  //menampilkan semua item todo
  const handleAllItem = () => {
    const mergedItems = [...items, ...listItems.filter((listItem) => !items.some((item) => item.id === listItem.id))];
    setItems(mergedItems);
  };

  //menghapus salah satu item todo
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  //menampilkan item yang sudah checked atau sudah dikerjakan
  const handleDoneItem = () => {
    const mergedItems = [...items, ...listItems.filter((listItem) => !items.some((item) => item.id === listItem.id))];

    setItems(mergedItems);
    setItems((items) => items.filter((item) => item.checked));
  };

  //menampilkan item yang harus dikerjakan atau menghapus item yg sudah dikerjakan
  const handleDeleteDoneItem = () => {
    const mergedItems = [...items, ...listItems.filter((listItem) => !items.some((item) => item.id === listItem.id))];

    setItems(mergedItems);
    setItems((items) => items.filter((item) => !item.checked));
  };

  //mengubah checked yg ada di item
  const handleCheckedItem = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  //menghapus semua data todo
  const handleClearItems = () => {
    setItems([]);
  };

  //mengubah nama item todo
  const handleEditItem = (id, newName) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, name: newName } : item)));
  };

  //mencari item todo
  const handleSearch = (query) => {
    setSearch(query); // Menyimpan nilai pencarian ke dalam state search
  };

  const filteredItems = search ? items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) : items;

  return (
    <>
      <div className="flex justify-center h-[100vh] items-center">
        <div className="w-[50%] border-[15px] text-center rounded-xl">
          <h1 className="font-bold text-2xl mt-5 mb-2">Todo Search</h1>
          <Form onAddItem={handleAddItem} onSearch={handleSearch} />
          <ListItems
            data={filteredItems}
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
