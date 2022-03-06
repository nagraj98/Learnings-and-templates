import React from 'react'

export default function Todo({todo, toggleTodos}) {

  function handleToggleClick() {
    toggleTodos(todo.id)
  }




  return (
    <div>

        <label>
            <input type={'checkbox'} checked={todo.complete} onChange={handleToggleClick}></input>
            {todo.name}

        </label>
        
    </div>
  )
}
