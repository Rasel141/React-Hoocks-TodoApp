import React, { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import { Jumbotron, ListGroup } from 'reactstrap'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React Hooks',
      isCompleted: false
    },
    {
      text: 'Learn Redux',
      isCompleted: false
    },
    {
      text: 'Learn Context Api',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodo = [...todos, { text }]
    setTodos(newTodo)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <Jumbotron>
      <h1 className='text-center py-3'>Todo App</h1>
      <ListGroup>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ListGroup>
        <TodoForm addTodo={addTodo} />
    </Jumbotron>
  )
}

export default App
