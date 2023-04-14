import React, { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const DummyList = [{ id: 1, todoTitle: "Vinay", todoDate: "2023-04-30" }];
const App = () => {
  const [toDoList, setToDoList] = useState(DummyList);

  const addNewTodo = (newObj) => {
    const oldToDoList = [...toDoList];
    oldToDoList.push(newObj);
    console.log(oldToDoList)
    setToDoList(oldToDoList)
  };

  return (
    <div>
      <h1> Vinay Kumar Kandu</h1>
      <AddToDo addNewTodo={addNewTodo}/>
      <ToDoList toDoList={toDoList} />
    </div>
  );
};

export default App;
