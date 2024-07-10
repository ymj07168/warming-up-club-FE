import React from "react";

export default function Form({ value, setValue, handleSumbit }) {
  // 해야할 일 생성시 입력
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSumbit} className="flex pt-2">
      <input
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        type="text"
        name="value"
        placeholder="해야할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />
      <input
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        type="submit"
        value="입력"
      />
    </form>
  );
}
