import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NewToDo from "./components/NewToDo/NewToDo";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import toDoData from "./ToDoDefault.json";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  const [toDoList, setToDoList] = useState([...toDoData]);
  const [listType, setListType] = useState("All");
  const [theme, setTheme] = useState("light");

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
