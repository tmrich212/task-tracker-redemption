import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TaskPanel from './components/TaskPanel';

function App() {
  const [tasks, setNewTasks] = useState([
    {title: 'Nothing to see here', status: 'incomplete', id: 1},
    {title: 'Just testing the waters', status: 'in progress', id: 2},
  ]);

  const handleClick = (id) => {
    setNewTasks((prevTask) => {
      return prevTask.filter((tasks) => {
        return id !== tasks.id;
      })
    })
  }

  return (
    <div className="App">
      <Form />
      <TaskPanel tasks={tasks} handleClick={handleClick}/>
    </div>
  );
}

export default App;
