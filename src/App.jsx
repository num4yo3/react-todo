import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomp, setIncomp] = useState([
    "ペットの餌やり",
    "弁当作り",
    "郵便物の投函"
  ]);
  const [comp, setComp] = useState(["腹筋50回", "背筋30回"]);

  const onChangeTodotext = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomp, todoText];
    setIncomp(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomp];
    newTodos.splice(index, 1);
    setIncomp(newTodos);
  };

  const onCLickComplete = (index) => {
    const newTodos = [...incomp];
    newTodos.splice(index, 1);
    const newCompleteTodos = [...comp, incomp[index]];
    setIncomp(newTodos);
    setComp(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...comp];
    newCompleteTodos.splice(index, 1);
    const newIncompTodo = [...incomp, comp[index]];
    setComp(newCompleteTodos);
    setIncomp(newIncompTodo);
  };

  return (
    <>
      <h1 className="title">TODOリスト</h1>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodotext}
        onClick={onClickAdd}
        disabled={incomp.length >= 5}
      />
      {incomp.length >= 5 && (
        <p style={{ color: "red" }}>登録できるToDoは5個までです。</p>
      )}
      <IncompleteTodo
        todos={incomp}
        onCLickComplete={onCLickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={comp} onClickBack={onClickBack} />
    </>
  );
};
