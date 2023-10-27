import React, { useState } from "react";
import styled from "styled-components";
import { RiTodoFill, RiDeleteBack2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import Modal from "./Modal";

const Todo = ({ todo, onDelateTodo, onToggle, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [changeText, setChangeText] = useState(todo.text);

  const modalHandler = () => {
    setIsOpen((prev) => !prev);
  };
  //бул функция бизде мадалканы ачып жапканга жардам берет

  const updateModal = () => {
    setOpenUpdateModal((prev) => !prev);
  };
  //бул функция болсо update мадалканы ачып жапканга жардам берет
  const changeTextValue = (e) => {
    setChangeText(e.target.value);
  };
  //бул жакта биз инпуттун ичиндеги значениени алып жатабыз

  const changeTextBtn = () => {
    onUpdate(todo.id, changeText);
    setOpenUpdateModal((prev) => !prev);
  };
  //бул болсо когда озгорткрндо update кылганда озгортуу деген кнопканы басканда id жана жаны текстти props кылып берет ,жана модаканы жабат

  return (
    <>
      <TodoList style={todo.isCompleted ? COMPLATED : {}}>
        <RiTodoFill className="todoFillStyle" />
        <TodoConteiner>
          <TodoText>{todo.text}</TodoText>
          <TodoTime>date: {todo.data}</TodoTime>
        </TodoConteiner>
        <RiDeleteBack2Line className="todoDeleteStyle" onClick={modalHandler} />
        <FaCheck className="checkIcon" onClick={() => onToggle(todo.id)} />
        <BsFillPencilFill className="updateIcon" onClick={updateModal} />
      </TodoList>

      {isOpen && (
        <Modal onClose={modalHandler}>
          <Warning>Are you sure you want to delate this todo...</Warning>
          <ModalDelateBtn onClick={() => onDelateTodo(todo.id)}>
            Delate
          </ModalDelateBtn>
        </Modal>
      )}
      {openUpdateModal && (
        <Modal onClose={updateModal}>
          <UpdateHeading>Enter your update todo ...</UpdateHeading>
          <UpdateInput
            type="text"
            value={changeText}
            onChange={changeTextValue}
          />
          <UpdateBtn onClick={changeTextBtn}>add</UpdateBtn>
        </Modal>
      )}
    </>
  );
};

export default Todo;

const COMPLATED = {
  backgroundColor: " unset",
  borderColor: " gray",
  color: "gray",
};
const TodoConteiner = styled.div`
  display: flex;
  flex-direction: column;
`;
const TodoList = styled.div`
  width: 28rem;
  display: flex;
  border: 1px solid black;
  position: relative;
  background-color: white;
  margin-top: 1rem;
`;
const TodoText = styled.p`
  font-family: monospace;
  font-size: 1.2rem;
`;
const TodoTime = styled.p`
  font-family: monospace;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;
const ModalDelateBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: red;
  color: white;
  border: none;
  margin-right: 5rem;
  font-weight: bold;
  &:hover {
    background-color: green;
  }
  &:focus {
    background-color: red;
  }
`;
const Warning = styled.h2`
  font-family: monospace;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
const UpdateInput = styled.input`
  width: 20rem;
  height: 2rem;
  border: 1px solid black;
  padding: 1rem 1rem;
  margin-bottom: 4rem;
`;
const UpdateBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border: none;
  background: green;
  border-radius: 0.5rem;
  transition: 0.3s;
  margin-right: 3rem;
  &:hover {
    transform: scale(0.95);
  }
`;
const UpdateHeading = styled.h2`
  font-family: monospace;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
