import React from "react";
import style from "./Todo.css";

function TodoItem({ title, id, handelRemove }) {
  const handleDelet = () => {
    handelRemove(id);
  };

  return (
    <div className="output">
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <button
          style={{
            borderRadius: "50%",
            marginTop: "18px",
            marginRight: "10px",
            backgroundColor: "black"
          }}
          onClick={handleDelet}
        ></button>
      </div>
    </div>
  );
}

export { TodoItem };
