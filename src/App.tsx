import React, { useState } from 'react';
import { Task } from './components/Task/taskType';
import CreateBtn from './components/CreateBtn/CreateBtn';
import TaskCard from './components/Task/TaskCard';
import './App.css';
import UseRefesercizio from './components/useRef/UseRefesercizio';
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskSubmit = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div className='App w-100'>
      {/* <div className='container'>
      <CreateBtn onTaskSubmit={handleTaskSubmit} />
      <TaskCard tasks={tasks} /> 
      </div> */}
      <UseRefesercizio/>
    </div>
  );
}


export default App;
