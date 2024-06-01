// import React ,{useState} from 'react'
// import Todoform from './Todoform'
// import {v4 as uuidv4} from 'uuid';
// import Todo from './Todo';
// import { EditTodoForm } from "./EditTodoForm";

// uuidv4();

// const Todowrapper = () => {
//     const [todos,settodo] = useState([]);

//     const addTodo = todo =>{
//         settodo([...todos, {id: uuidv4(),task: todo, completed: false, isEditing:false},

//         ]);
//     }

//     const deleteTodo = (id) => settodo(todos.filter((todo) => todo.id !== id));

//   const toggleComplete = (id) => {
//     settodo(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   }

//   const editTodo = (id) => {
//     settodo(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//       )
//     );
//   }

//   const editTask = (task, id) => {
//     settodo(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
//       )
//     );
//   };

//   return (
//     <div className="todowrapper">
//        <h1>To-do list</h1>

//       <Todoform addTodo={addTodo} />
//           <h2 style={{color: "white", alignItem: "left" }}>My Tasks</h2>
  
//      {todos.map((todo) =>
//         todo.isEditing ? (
//           <EditTodoForm editTodo={editTask} task={todo} />
//         ) : (
//           <Todo       
//             key={todo.id}
//             task={todo}
//             deleteTodo={deleteTodo}
//             editTodo={editTodo}
//             toggleComplete={toggleComplete}
//           />
//         )
//       )}
      
//     </div>
//   )
// }

// export default Todowrapper


// Inside Todowrapper.js

import React, { useState } from 'react';
import Todoform from './Todoform';
import Todo from './Todo';
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from 'uuid';

uuidv4();

const Todowrapper = () => {
    const [todos, settodo] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = todo => {
        settodo([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const deleteTodo = id => settodo(todos.filter(todo => todo.id !== id));

    const toggleComplete = id => {
        settodo(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = id => {
        settodo(
            todos.map(todo =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        settodo(
            todos.map(todo =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const sortedTodos = [...todos].sort((a, b) => a.task.localeCompare(b.task));

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') {
            return todo.completed === true;
        } else if (filter === 'incomplete') {
            return todo.completed === false;
        } else {
            return true;
        }
    });

    return (
        <div className="todowrapper">
            <h1>To-do list</h1>
            <Todoform addTodo={addTodo} />
            <h2 style={{ color: "white", alignItems: "left" }}>My Tasks</h2><br/>
            <div>
                <button  style={{height:"30px", marginRight: "20px" , minWidth: "30px", color: 'blue' ,padding: '10px'}} onClick={() => setFilter('all')}>All</button>
                <button style={{height:"30px", marginRight: "20px" , minWidth: "30px" , color: 'blue' ,padding: '10px'}} onClick={() => setFilter('completed')}>Completed</button>
                <button style={{height:"30px", marginRight: "20px" , minWidth: "30px" , color: 'blue',padding: '10px'}} onClick={() => setFilter('incomplete')}>Incomplete</button>
            </div><br/>
            {filteredTodos.map(todo =>
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
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
    );
};

export default Todowrapper;



