import "./FilterBar.css";

function FilterBar({ setListType, listType, toDoList, setToDoList }) {
  const setListTypeHandler = (type) => {
    setListType(type);
  };

  //   clear completed items

  const clearCompletedHandler = () => {
    setToDoList((prevToDoList) => prevToDoList.filter((toDo) => !toDo.isDone));
    setListType("All");
  };

  return (
    <div className="filter-bar">
      <div className="filter-container">
        <div className="filter-bar__item-left">
          <p>{toDoList.filter((toDo) => !toDo.isDone).length} items left</p>
        </div>
        <div className="filter-bar__filters">
          <button
            className={`filter-bar___btn ${
              listType === "All" ? "checked" : ""
            }`}
            onClick={() => setListTypeHandler("All")}
          >
            All
          </button>
          <button
            className={`filter-bar___btn ${
              listType === "Active" ? "checked" : ""
            }`}
            onClick={() => setListTypeHandler("Active")}
          >
            Active
          </button>
          <button
            className={`filter-bar___btn ${
              listType === "Completed" ? "checked" : ""
            }`}
            onClick={() => setListTypeHandler("Completed")}
          >
            Completed
          </button>
        </div>
        <div>
          <button
            className="filter-bar___clear-btn"
            onClick={clearCompletedHandler}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
