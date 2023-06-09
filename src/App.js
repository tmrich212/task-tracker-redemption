import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TaskPanel from './components/TaskPanel';
import Modal from './components/Modal';




function App() {
  const [showModal, setShowModal] = useState(false);
 
  const [tasks, setNewTasks] = useState(getLocalData());

  function getLocalData(){
    const todoItem = localStorage.getItem("tasks")
    const savedTasks = JSON.parse(todoItem)
    return savedTasks || [];
  }
  // {task: 'Nothing to see here', status: 'incomplete', date: '01/20/23', id: 1},
    // {task: 'Just testing the waters', status: 'in progress', id: 2},
  // useEffect(() => {
  //   const data = localStorage.getItem('tasks');
  //   if (data !== null) setNewTasks(JSON.parse(data))
  // }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

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

  const editTask = (idx) => {
    setNewTasks(idx);
    setShowModal(true);
  }

  return (
    <div className="App">
      <Form addTask={addTask}/>
      <TaskPanel tasks={tasks} handleClick={handleClick} editTask={editTask}/>

      {showModal && (<Modal showModal={showModal}/>)}
    </div>
  );
}

export default App;
