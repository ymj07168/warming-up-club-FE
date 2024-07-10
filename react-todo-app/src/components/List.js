import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

const List = React.memo(({ todoData, setTodoData, handleClick }) => {
  const handleEnd = (result) => {
    console.log("result", result);

    if (!result.destination) return;
    const newTodoData = todoData;

    // 새로 정렬될 아이템 삭제
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 새로 정렬되 아이템 추가(재배치)
    newTodoData.splice(result.destination.index, 0, reorderedItem);

    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <ListItem
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                      handleClick={handleClick}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default List;
