import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

// import uuidv4 from 'uuid/v4'

import { v4 as uuidv4 } from 'uuid';

// const LOCAL_STORAGE_KEY = "TodoApp.todos"

function App() {

  const [ todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // on refresh, initialising the todos with the value stored in localstorage.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('mylist'))
    console.log(storedTodos);

    if (storedTodos) setTodos(storedTodos)

    // setTodos(JSON.parse)
  }, [])

  //storing the object in local storage so that it persists between page reloads.
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    // localStorage.getItem(LOCAL_STORAGE_KEY);
    localStorage.setItem('mylist', JSON.stringify(todos));
    localStorage.getItem('mylist');
  }, [todos])



  function toggleTodos(id) {

    // Create a copy because we shouldn't directly modify a state varable
    const newTodos = [...todos]

    const todo = newTodos.find((todo) => todo.id===id)
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }
  
  function handleClearCompleted() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }
  

  function handleAddTodo(e) {

    const name1 = todoNameRef.current.value;

    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name:name1, complete:false}]
    })
    console.log(name1);

    todoNameRef.current.value = null;

  }


  return (
    <>
    <TodoList todosProp={todos} toggleTodos={toggleTodos}/>
    <input ref={todoNameRef} type="test" />
    <button onClick={handleAddTodo}> Add Todo</button>
    <button onClick={handleClearCompleted}> Clear Completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
    
  );
}

export default App;
