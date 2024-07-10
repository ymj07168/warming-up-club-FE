import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  // 해야할 일 생성시 입력
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // 새로운 할 일 추가
  const handleSumbit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드되는 것을 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <form style={{ display: "flex" }} onSubmit={handleSumbit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padidng: "5px" }}
            placeholder="해야할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
