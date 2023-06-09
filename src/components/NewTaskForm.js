import React, { useState } from 'react'

export default function NewTaskForm() {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            task: task,
            status: status,
            date: date,
            id: Math.floor(Math.random() * 1000)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Task</span>
                <input type="text" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}/>
            </label>
            <label>
                <span>Status</span>
                <select onChange={(e) => setStatus(e.target.value)}
                value={status}>
                    <option value="incomplete">incomplete</option>
                    <option value="in-progress">in progress</option>
                    <option value="completed">completed</option>
                </select>
            </label>
            <label>
                <span>Due Date</span>
                <input type="date" 
                onChange={(e) => setDate(e.target.value)}
                value={date}/>
            </label>
        </form>
    </div>
  )
}

