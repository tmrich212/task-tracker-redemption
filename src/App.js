import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TaskPanel from './components/TaskPanel';

function App() {
  const [tasks, setNewTasks] = useState([
    {task: 'Nothing to see here', status: 'incomplete', date: '01/20/23', id: 1},
    {task: 'Just testing the waters', status: 'in progress', id: 2},
  ]);

  const handleClick = (id) => {
    setNewTasks((prevTask) => {
      return prevTask.filter((tasks) => {
        return id !== tasks.id;
      })
    })
  }

  const addTask = (task) => {
    setNewTasks((prevTask) => {
      return [...prevTask, task];
    })
  }

  return (
    <div className="App">
      <Form addTask={addTask}/>
      <TaskPanel tasks={tasks} handleClick={handleClick}/>
    </div>
  );
}

export default App;
