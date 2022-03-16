import React from 'react'

// * Componente TaskRow, que se encarga de mostrar la tabla de tareas, props es un objeto que contiene la información de las tareas
export const TaskRow = props => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type="checkbox" // ? tipo de input
        checked={props.task.done} // ? ckecked es el estado de la tarea
        onChange={() => props.toggleTask(props.task)} // ? onChange es el evento que se ejecuta al hacer click en el checkbox el cual ejecuta el método toggleTask
      />
    </td>
  </tr>
)
