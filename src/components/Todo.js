import React from 'react'

const Todo = ({ index, todo, completeTodo, removeTodo }) => {
  const { text, isCompleted } = todo

  return (
    <div
      style={{ textDecoration: isCompleted ? 'line-through' : '' }}
      className='todo'
    >
      {text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )
}

export default Todo
