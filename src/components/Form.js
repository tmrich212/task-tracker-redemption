import React, { useState } from 'react';

const Form = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('incomplete');
    const [date, setDate] = useState('');

    const resetForm = () => {
        setTask('');
        setStatus('incomplete');
        setDate('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { 
            task: task,
            status: status,
            date: date,
            id: Math.floor(Math.random() * 1000)
         };
        addTask(newTask);
        resetForm();
        console.log(newTask);
    }


    return ( 
        <div className="form-container">
            <h1>Welcome to Task Tracker</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label>
                    <span>New Task</span>
                    <input type="text" placeholder='new todo'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="status">
                        <span>Status</span>
                        <select value={status} 
                    onChange={(e) => setStatus(e.target.value)}>
                        <option value="incomplete">incomplete</option>
                        <option value="in-progress">in progress</option>
                        <option value="completed">completed</option>
                    </select>
                    </label>
                   
                </div>
               <div className='form-input'>
                    <label htmlFor="date">
                        <span>Due Date</span>
                        <input type="date" onChange={(e)=> setDate(e.target.value)} value={date}/>
                    </label>
                    
                    {/* <p>Selected Date: {date}</p> */}
                </div>

               <div className="submit">
                <button>Add New Task</button>
               </div>
            </form>
        </div>
     );
}
 
export default Form;