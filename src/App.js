import React, { useState } from 'react'
import Todo from './components/Todo'

import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Redux Learn',
      isCompleted: false
    },
    {
      text: 'Context Api',
      isCompleted: false
    }
  ])

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div className='app'>
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
      <form onSubmit={submitHandler}>
        <input type='text' className='input' placeholder='Add todo...' />
      </form>
    </div>
  )
}

export default App
