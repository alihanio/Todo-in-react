import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import TodoActions from "./TodoActions";

const TodoBox = () => {
  const [todos, setTodos] = useState(getLocalItems());

  function getLocalItems() {
    const list = localStorage.getItem("todos");
    if (list) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuid(),
      data: new Date().toLocaleString(),
    };

    setTodos((prev) => [...prev, newTodo]);
  };
  //Бул addTodoHandler деген функцияда биз newTodo  деген обьект ачып аны биз todosтагы пустой массивке сактадык. Мындайча айтканда жаны тудунун данныйларын бердик

  const delateTodoHandler = (id) => {
    const exchangeTodos = todos.filter((item) => item.id !== id);
    setTodos(exchangeTodos);
  };
  //бул жакта болсо  todos филтер кылып жатабыз жана эгер item.id барабар болбосо todo нан келип жаткан id геудальтетет

  const updateTodoHandler = (id, changeText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: changeText,
              data: new Date().toLocaleString(),
            }
          : todo
      )
    );
  };
  // бул жакта предудущий значенмени иттерация кылып text тин значениесин жаны todo дан келген значенияга алмаштырып жатабыз ошондой эле датаны жаны датага алмаштырып жатабыз

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
              data: new Date().toLocaleString(),
            }
          : todo;
      })
    );
  };
  //бул жакта todos ту иттерация кылып жатабыз , эгер todo нун id сине todo.jsx тен келген idсалыштырып жатабыз . эгер окшош болсо isCompleted ти озгортуп жатабыз , типа true= false, false=true, и плюс датаны жаны датага алмаштырып жатабыз

  const resetTodosHandler = () => {
    setTodos([]);
  };
  //бул жакта болсо биз бут тудо листтерди очуруп жатабыз

  const delateCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  //Бул функция когда комплайтед басылса ошолорду очурот , мындайча айтканда буткон задачаларды очурот

  const completedTodosCaunt = todos.filter((todo) => todo.isCompleted).length;
  //бул болсо канча задачан буткон болсо ошону санап турат

  return (
    <Conteiner>
      <TodoForm onAddTodo={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          resetTodosHandler={resetTodosHandler}
          delateCompletedTodosHandler={delateCompletedTodosHandler}
          isExistingCompletedTodo={!!completedTodosCaunt}
        />
      )}
      <TodoList
        todos={todos}
        onDelateTodo={delateTodoHandler}
        onToggle={toggleTodoHandler}
        onUpdate={updateTodoHandler}
      />
      {!!completedTodosCaunt > 0 && (
        <Caunt>
          You have to completed {completedTodosCaunt}
          {completedTodosCaunt > 1 ? " todos" : " todo"}
        </Caunt>
      )}
    </Conteiner>
  );
};

export default TodoBox;

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Caunt = styled.h2`
  font-family: monospace;
  font-size: 1.2rem;
  margin-top: 2rem;
  color: white;
`;
