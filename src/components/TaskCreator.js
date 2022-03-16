import React, { useState } from 'react'

export const TaskCreator = props => {
  // * UsesState se encarga de crear un estado en el componente
  const [newTaskName, setNewTaskName] = useState('')

  // * Método encargado de agregar una nueva tarea al estado, 'e' es el evento que se dispara del input, 'target' es el elemento que se esta manipulando
  const updateNewTaskValue = e => setNewTaskName(e.target.value)

  const createNewTask = () => {
    props.callback(newTaskName)
    setNewTaskName('')
  }

  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <button className="btn btn-primary mt-1" onClick={createNewTask}>
        Add
      </button>
    </div>
  )
}
