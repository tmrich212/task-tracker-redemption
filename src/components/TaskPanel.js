import React from 'react';
import './TaskPanel.css'

const TaskPanel = ({ tasks, handleClick, editTask }) => {
    return ( 
        <div className='task-panel'> 
           <header><h1>Your To-do List</h1></header>

          <table className='table'>
            <thead>
              <tr>
                <th className='expand'>Task</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr key={task.idx}>
                  <td>{task.task}</td>
                  <td className={`${task.status}`}>{task.status}</td>
                  <td>{task.date}</td>
                  {/* <td><button className='action-btn' onClick={() => editTask(idx)}>edit</button></td> */}
                  <td><button className='action-btn' onClick={() => handleClick(task.id)}>delete</button></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
     );
}
 
export default TaskPanel;