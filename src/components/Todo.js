import React from 'react'

const Todo = ({ index, todo }) => {
  const { text, isCompleted } = todo

  return <div className='todo-list'>{text}</div>
}

export default Todo
