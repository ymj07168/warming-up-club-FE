import React from "react";

export default function Form({ value, setValue, handleSumbit }) {
  // 해야할 일 생성시 입력
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{ display: "flex" }} onSubmit={handleSumbit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", padidng: "5px" }}
        placeholder="해야할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
    </form>
  );
}
