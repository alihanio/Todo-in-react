import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";

const TodoActions = ({
  resetTodosHandler,
  delateCompletedTodosHandler,
  isExistingCompletedTodo,
}) => {
  return (
    <ActionsConteiner>
      <ButtonReset onClick={resetTodosHandler}>
        <RiRefreshLine className="refresh" />
      </ButtonReset>
      <ButtonRefresh
        onClick={delateCompletedTodosHandler}
        disabled={!isExistingCompletedTodo}
      >
        <RiDeleteBack2Line className="allDelete" />
      </ButtonRefresh>
    </ActionsConteiner>
  );
};

export default TodoActions;

const ButtonReset = styled.button`
  width: 3rem;
  height: 2.5rem;
  margin-right: 2rem;
  margin: 1rem 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
`;
const ButtonRefresh = styled.button`
  disabled: ${({ disabled }) => disabled};
  width: 3rem;
  height: 2.5rem;
  margin-right: 2rem;
  margin: 1rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  border: none;
`;
const ActionsConteiner = styled.div`
  display: flex;
`;
