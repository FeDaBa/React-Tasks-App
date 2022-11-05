import { useState } from 'react'

const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      createNewTask(newTaskName)
      localStorage.setItem('tasks', newTaskName)
      value={newTaskName}
      setNewTaskName('')
    }

  return (

    <form onSubmit={handleSubmit}>

        <input 
            type="text"
            placeholder="Enter a new task"
            onChange={(e) => setNewTaskName(e.target.value)}
        />

        <button>
            Save task
        </button>

    </form>

  )
}

export default TaskCreator