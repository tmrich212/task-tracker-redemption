import React from 'react';
import './TaskPanel.css'

const TaskPanel = ({ tasks, handleClick }) => {
    return ( 
        <div className='task-panel'> 
        <header><h1>Your Todo List</h1></header>
            <div className='task-container'>
            {tasks.map((task) => (
                  <div key={task.id} className="task-item">
                    <h3>{task.title}</h3>
                    <p>status: {task.status}</p>
                    <p>due date: {task.date}</p>
                    <button onClick={() => handleClick(task.id)}>delete item</button>
                  </div>   
            ))}
            </div>
        </div>
     );
}
 
export default TaskPanel;