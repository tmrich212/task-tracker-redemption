import React, { useState } from 'react';

const Form = () => {
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { task, status, date };
        console.log(newTask);
    }


    return ( 
        <div className="form-container">
            <h1>Welcome to Task Tracker</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label htmlFor="task">New Task</label>
                    <input type="text" placeholder='new todo'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label htmlFor="status">Status</label>
                    <select value={status} 
                    onChange={(e) => setStatus(e.target.value)}>
                        <option value="incomplete">incomplete</option>
                        <option value="in-progress">in progress</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
               {/* <DatePicker /> */}
               <div className='date-container'>
                    <label htmlFor="date">Due Date</label>
                    <input type="date" onChange={(e)=> setDate(e.target.value)}/>
                    <p>Selected Date: {date}</p>
                </div>

               <div className="submit">
                <button>Add New Task</button>
               </div>
            </form>
        </div>
     );
}
 
export default Form;