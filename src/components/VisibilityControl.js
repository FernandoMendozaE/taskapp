import React from 'react'

export const VisibilityControl = props => {
  return (
    <div className="form-check form-check-inline">
      <input
        type="checkbox"
        className="form-check-input"
        checked={props.isChecked} // ? ckecked es una propiedad que se encarga de verificar si el checkbox esta checkeado o no
        onChange={e => props.callback(e.target.checked)} // ? onChange es una propiedad que se encarga de detectar cuando se hace click en el checkbox. Callback es una propiedad que se encarga de ejecutar una función
      />
      <label htmlFor="form-check-label">Show {props.description}</label>
    </div>
  )
}
