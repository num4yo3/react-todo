import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="completed_task">
      <h2 className="h2title">完了済リスト</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="todo_list">
                <p>{todo}</p>
                <button className="btn01" onClick={() => onClickBack(index)}>
                  戻す
                </button>
                <button className="btn02">削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
