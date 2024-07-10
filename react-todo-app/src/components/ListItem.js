import React from "react";

const ListItem = React.memo(
  ({
    key,
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
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

    return (
      <div
        key={key}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={false}
            checked={completed}
            onChange={() => handleCompleteChange(id)}
          />{" "}
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div>
          <button className="px-4 py-2" onClick={() => handleClick(id)}>
            x
          </button>
        </div>
      </div>
    );
  }
);

export default ListItem;
