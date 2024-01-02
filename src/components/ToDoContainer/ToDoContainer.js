import "./ToDoContainer.css";
import { ReactComponent as CrossIcon } from "../../assets/images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "../../assets/images/icon-check.svg";
import { useState, useEffect } from "react";

function ToDoContainer({ toDoData, listType, changeList }) {
  // const [checkedItems, setCheckedItems] = useState({});
  const [checkedItems, setCheckedItems] = useState(() => {
    // Initialize with data from localStorage or an empty object
    const storedData = localStorage.getItem("checkedItems");
    return storedData ? JSON.parse(storedData) : {};
  });

  const handleCheckClick = (key) => {
    // Checked to dos
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [key]: !prevCheckedItems[key],
    }));

    // updating the checked value of the item
    changeList((prevToDoData) =>
      prevToDoData.map((toDo) =>
        toDo.id === key ? { ...toDo, isDone: !toDo.isDone } : toDo
      )
    );
  };

  const handleCrossClick = (key) => {
    // Remove the item from the toDoData state
    changeList((prevToDoData) =>
      prevToDoData.filter((toDo) => toDo.id !== key)
    );
  };

  useEffect(() => {
    // Save checkedItems to localStorage whenever it changes
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const filteredToDo = toDoData.filter((toDo) => {
    if (listType === "All") {
      return true;
    } else if (listType === "Active") {
      return !toDo.isDone;
    } else if (listType === "Completed") {
      return toDo.isDone;
    }
    return false;
  });

  const ToDO = filteredToDo.map((toDo) => (
    <div
      key={toDo.id}
      className={`todo-container__list-item ${
        checkedItems[toDo.id] ? "checked" : ""
      }`}
    >
      <div className="todo-container__list-item__name">
        <div className="todo-container__item-check">
          <CheckIcon
            className={`check-icon`}
            onClick={() => handleCheckClick(toDo.id)}
          />
        </div>
        <p>{toDo.name}</p>
      </div>
      <CrossIcon
        className="cross-icon"
        onClick={() => handleCrossClick(toDo.id)}
      />
    </div>
  ));

  return (
    <div className="todo-container">
      <div className="todo-container__list">{ToDO}</div>
    </div>
  );
}

export default ToDoContainer;
