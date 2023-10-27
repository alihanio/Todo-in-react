import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ onAddTodo }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredValue !== "") {
      onAddTodo(enteredValue);
    } else if (enteredValue === "") {
      setError("The field should not be empty.");
    }
    setEnteredValue("");
  };
  //бул жакта биз сабмитке функция берип жатабыз жана инпутка валидация берип жатабыз

  const changeValue = (e) => {
    setEnteredValue(e.target.value);
    if (e.target.value === "") {
      setError("The field should not be empty.");
    } else {
      setError("");
    }
  };
  //бул жакта болсо инпутка валидация берип жатабыз

  return (
    <Form onSubmit={submitHandler}>
      <Box>
        <Input
          type="text"
          placeholder="Enter your Todo...."
          value={enteredValue}
          onChange={changeValue}
        />
        <InputWarning>{error}</InputWarning>
      </Box>
      <Button>ADD</Button>
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  display: flex;
`;
const Button = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 0.5rem;
  margin-left: 2rem;
  margin-top: 4.5rem;
  color: white;
  background: rgb(24, 148, 250);
  border: none;
  &:active {
    background: blue;
  }
`;
const Input = styled.input`
  width: 30rem;
  height: 3rem;
  padding: 1rem 1rem;
  &:focus {
    outline: none;
    border: 3px solid blue;
  }
`;
const InputWarning = styled.p`
  color: red;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
