import React from "react";
import { TodoItem } from "./TodoItem";

function TodoList({ text, handelRemove }) {
  return (
    <div className="container">
      {text.map((item) => {
        return <TodoItem {...item} key={item.id} handelRemove={handelRemove} />;
      })}
    </div>
  );
}

export { TodoList };
