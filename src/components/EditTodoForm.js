import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };


  return (
    <form onSubmit={handleSubmit} className="form">
    <input className="input" type="text" value={value} onChange={(e) => setValue(e.target.value)}  placeholder='Update task' />
    <button type="submit" className='btn'>Add Task</button>
  </form>
  )
}