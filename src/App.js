import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NewToDo from "./components/NewToDo/NewToDo";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import toDoData from "./ToDoDefault.json";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  const [toDoList, setToDoList] = useState(() => {
    const storedData = localStorage.getItem("toDoList");
    return storedData ? JSON.parse(storedData) : toDoData;
  });
  const [listType, setListType] = useState("All");

  const [theme, setTheme] = useState(() => {
    const storedData = localStorage.getItem("theme");
    return storedData ? JSON.parse(storedData) : "light";
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    // Save toDoList to localStorage whenever it changes
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <div
        className={`overlay ${theme === "light" ? "lightImage" : "darkImage"}`}
      ></div>
      <Header setTheme={setTheme} theme={theme} />
      <NewToDo toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoContainer
        toDoData={toDoList}
        changeList={setToDoList}
        listType={listType}
      />
      <FilterBar
        setListType={setListType}
        listType={listType}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    </div>
  );
}

export default App;
