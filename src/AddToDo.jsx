import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddToDo = ({ addNewTodo }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = () => {
    const newTodo = {
      id: Math.random().toFixed(4),
      todoTitle: todo,
      todoDate: date,
    };
    console.log(newTodo);
    addNewTodo(newTodo);
    setTodo('')
    setDate('')
  };
  return (
    <React.Fragment>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname"></input>
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname"></input>
        <br />
        <label htmlFor="todo">Todo</label>
        <br />
        <input type="text" id="todo" name="todo"></input>
        <br />
        <label htmlFor="date">Date</label>
        <br />
        <input type="date" id="date" name="date"></input>
        <br />
        <button type="submit">Submit</button>
      </form> */}
      <form>
        <Typography variant="h5" style={{ color: "Red" }}>
          Todo
        </Typography>

        <TextField
          id="outlined-basic"
          onChange={todoChangeHandler}
          value={todo}
          variant="outlined"
        />
        <Typography variant="h5" style={{ color: "Red" }}>
          Date
        </Typography>

        <TextField
          type="date"
          id="outlined-basic"
          onChange={dateChangeHandler}
          variant="outlined"
          value={date}
        />
        <br />
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default AddToDo;
