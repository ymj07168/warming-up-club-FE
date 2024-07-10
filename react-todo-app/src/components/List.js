import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  // 할 일 아이템 스타일
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  // 체크박스 핸들러
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  // 할 일 제거
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.completed)} id={data.id} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            checked={data.completed}
            onChange={() => handleCompleteChange(data.id)}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
