import React from 'react'
import Todo from './Todo'

export default function TodoList({ todosProp, toggleTodos }) {
  return (
    todosProp.map((todo) => {
      return <Todo key = {todo.id} todo = {todo} toggleTodos={toggleTodos}/>
    })
  )
}
