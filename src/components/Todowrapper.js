import React ,{useState} from 'react'
import Todoform from './Todoform'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import { EditTodoForm } from "./EditTodoForm";

uuidv4();

const Todowrapper = () => {
    const [todos,settodo] = useState([]);

    const addTodo = todo =>{
        settodo([...todos, {id: uuidv4(),task: todo, completed: false, isEditing:false},

        ]);
    }

    const deleteTodo = (id) => settodo(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    settodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    settodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    settodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todowrapper">
       <h1>To-do list</h1>

      <Todoform addTodo={addTodo} />
          <h2 style={{color: "white", alignItem: "left" }}>My Tasks</h2>
  
     {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo       
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      
    </div>
  )
}

export default Todowrapper
