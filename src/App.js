import { useEffect, useState } from 'react' // ! Importa el hook useState
import { TaskBanner } from './components/TaskBanner'
import { TaskCreator } from './components/TaskCreator'
import { TaskRow } from './components/TaskRow'
import { VisibilityControl } from './components/VisibilityControl'

function App() {
  // * UsesState se encarga de crear un estado en el componente
  const [userName, setuserName] = useState('fazt')
  const [taskItems, setTaskItems] = useState([
    { name: 'Task One', done: false },
    { name: 'Task Two', done: false },
    { name: 'Task Three', done: true },
    { name: 'Task Four', done: false },
  ])
  const [showCompleted, setShowCompleted] = useState(true) // ? estado para checked

  // * useEffect se encarga de ejecutar una función cuando el componente se renderiza
  useEffect(() => {
    let data = localStorage.getItem('tasks') // ? localStorage se encarga de guardar datos en el navegador, el getItem se encarga de obtener los datos
    if (data) {
      setTaskItems(JSON.parse(data))
    } else {
      setuserName('fazt Example')
      setTaskItems([
        { name: 'Task One Example', done: false },
        { name: 'Task Two Example', done: false },
        { name: 'Task Three Example', done: true },
        { name: 'Task Four Example', done: false },
      ])
      setShowCompleted(true)
    }
  }, [])

  // ! Se ejeucta cuando se hace un cambio en el estado
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems)) // ? setItem se encarga de guardar datos en el navegador
  }, [taskItems]) // ? [taskItems] es un array que se encarga de detectar cambios en el estado

  // * Método que se encarga de agregar una nueva tarea
  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  // * Método que se encarga de cambiar el estado de las tareas
  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

  // * Función que se encarga de construir la tabla de tareas, la información se esta enviando al componente TaskRow mediante props
  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => <TaskRow key={task.name} task={task} toggleTask={toggleTask} />)

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={checked => {
            console.log(checked)
            setShowCompleted(checked)
          }} // ? función que se encarga de cambiar el estado de la variable showCompleted
        />
      </div>

      {/* // * Se encarga de mostrar las tareas que estan checkeadas completadas */}
      {showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(true)}</tbody>
        </table>
      )}
    </div>
  )
}

export default App
