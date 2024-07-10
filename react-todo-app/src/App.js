import React, { useCallback, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  // 할 일 제거
  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        <List
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form value={value} setValue={setValue} handleSumbit={handleSumbit} />
      </div>
    </div>
  );
}
