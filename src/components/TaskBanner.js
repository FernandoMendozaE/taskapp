import React from 'react'

export const TaskBanner = props => (
  // ? se esta usando la función filter() para filtra toda las que no esten completadas
  <h4 className="bg-primary text-white text-center p-4">
    {props.userName}'s Task App({props.taskItems.filter(t => !t.done).length} tasks to do)
  </h4>
)
