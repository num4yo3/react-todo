import React from "react";

const style = {
  display: "flex",
  padding: "5px",
  margin: "5px",
  backgroundColor: "rgb(220, 221, 255)"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDoリストを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>登録</button>
    </div>
  );
};
