import React from "react";
import { TodoList } from "./TodoList";
import { v4 as uuid } from "uuid";

function Todo() {
  const [state, setState] = React.useState("");
  const [text, setText] = React.useState([]);

  const handleChange = (e) => {
    setState(e.target.value);
    //  console.log(state)
  };
  const handleClick = () => {
    if (state === "") {
      alert("add something");
    } else {
      setText([...text, { title: state, id: uuid() }]);
    }
  };

  const handleClear = () => {
    setState("");
  };

  const handelRemove = (id) => {
    let updatedList = text.filter((item) => item.id !== id);
    setText(updatedList);
  };

  return (
    <div style={{ padding: "2%" }}>
      <h1 style={{ color: "rgb(0,75,150)" }}>TODO APPLICATION</h1>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={handleClear}
      >
        CLEAR
      </button>
      <input
        value={state}
        onChange={handleChange}
        type="text"
        placeholder="Write Something..."
      />
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={handleClick}
      >
        +
      </button>
      <TodoList text={text} handelRemove={handelRemove} />
    </div>
  );
}

export { Todo };
