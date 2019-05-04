import React from 'react'
import { Button, ListGroupItem } from 'reactstrap';

const Todo = ({ index, todo, completeTodo, removeTodo }) => {
  const { text, isCompleted } = todo

  return (
    <ListGroupItem
      style={{ textDecoration: isCompleted ? 'line-through' : '' }}
      className="d-flex justify-content-between"
    >
      {text}
        <div>
            <Button color="info" onClick={() => completeTodo(index)}>Complete</Button>
            <Button className="ml-2" color="danger" onClick={() => removeTodo(index)}>x</Button>
        </div>
    </ListGroupItem>
  )
}

export default Todo
