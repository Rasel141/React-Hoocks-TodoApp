import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const submitHandler = e => {
    e.preventDefault()

    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type='text'
        placeholder='Add todo...'
        onChange={e => setValue(e.target.value)}
        value={value}
        className="py-5"
      />
    </Form>
  )
}

export default TodoForm
