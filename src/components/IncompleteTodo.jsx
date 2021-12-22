import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onCLickComplete, onClickDelete } = props;
  return (
    <div className="todo_task">
      <h2 className="h2title">未完了リスト</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="todo_list">
                <p>{todo}</p>
                <button
                  className="btn01"
                  onClick={() => onCLickComplete(index)}
                >
                  完了
                </button>
                <button className="btn02" onClick={() => onClickDelete(index)}>
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
