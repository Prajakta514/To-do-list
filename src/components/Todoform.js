import React,{useState} from 'react'

const Todoform = ({addTodo}) => {

    const [value, setvalue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setvalue("")
    }

  return (
    <form className="form" onSubmit ={handleSubmit}> 
      <input type="text" className="input" 
      value={value}
      placeholder="Enter Your next task " 
      onChange={(e)=>setvalue(e.target.value)}/>

      <button type="submit" className="btn">Add Task</button>
    </form>
  )
}

export default Todoform
