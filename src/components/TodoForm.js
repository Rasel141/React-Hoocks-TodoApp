import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const submitHandler = e => {
    e.preventDefault()

    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Add todo...'
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    </form>
  )
}

export default TodoForm
