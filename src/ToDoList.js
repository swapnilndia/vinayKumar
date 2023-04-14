import React from "react";

const ToDoList = ({ toDoList }) => {
  console.log(toDoList);
  return (
    <React.Fragment>
      {toDoList.map((toDo) => (
        <div
          key={toDo.id}
          style={{
            display: "flex",
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <span style={{color: 'blue'}}>{toDo.todoTitle}</span>
          <span style={{color: 'red'}}>{toDo.todoDate}</span>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ToDoList;
