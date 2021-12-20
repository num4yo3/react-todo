import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incomp, setIncomp] = useState([
    "ペットの餌やり",
    "弁当作り",
    "郵便物の投函"
  ]);
  const [comp, setComp] = useState(["腹筋50回"]);
  return (
    <>
      <h1 className="title">TODOリスト</h1>
      <input placeholder="ToDoリストを入力"></input>
      <button>登録</button>
      <div className="todo_task">
        <h2 className="h2title">未完了リスト</h2>
        <ul>
          {incomp.map((todo) => {
            return (
              <li key={todo}>
                <div className="todo_list">
                  <p>{todo}</p>
                  <button className="btn01">完了</button>
                  <button className="btn02">削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completed_task">
        <h2 className="h2title">完了済リスト</h2>
        <ul>
          {comp.map((todo) => {
            return (
              <li key={todo}>
                <div className="todo_list">
                  <p>腹筋50回</p>
                  <button className="btn01">戻す</button>
                  <button className="btn02">削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
