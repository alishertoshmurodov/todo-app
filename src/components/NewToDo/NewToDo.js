import "./NewToDo.css";
import { ReactComponent as CheckIcon } from "../../assets/images/icon-check.svg";
import { useState } from "react";

function NewToDo({ toDoList, setToDoList }) {
  const [newToDo, setNewToDo] = useState("");

  const inputHandler = (e) => {
    if (
      e.keyCode === 13 &&
      newToDo &&
      !toDoList.some((item) => item["name"] === newToDo.trim())
    ) {
      const newItem = {
        name: newToDo.trim(),
        isDone: false,
        id: newToDo.trim(),
      };
      setToDoList([...toDoList, newItem]);
      setNewToDo("");
    }
  };

  return (
    <div className="new-todo">
      <div className="new-todo__check">
        <CheckIcon />
      </div>
      <input
        onKeyDown={inputHandler}
        onChange={(e) =>
          setNewToDo(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        className="new-todo__input"
        type="text"
        placeholder="Create a new to do..."
        value={newToDo}
      ></input>
    </div>
  );
}

export default NewToDo;
