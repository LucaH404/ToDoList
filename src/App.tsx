import React, { useMemo, useState } from 'react';
import { Task } from './components/Task/taskType';
import CreateBtn from './components/CreateBtn/CreateBtn';
import TaskCard from './components/Task/TaskCard';
import './App.css';
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  console.log(tasks)
 
  const todoCount = useMemo(() => {
    return tasks.filter((task) => !task.isDone).length;
  }, [tasks]);
  const doneCount = useMemo(() => {
    return tasks.filter((task) => task.isDone).length;
  }, [tasks, todoCount]);

  const handleTaskSubmit = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div className='App w-100'>
      <div className='container'>
      <CreateBtn onTaskSubmit={handleTaskSubmit} />
      <TaskCard tasks={tasks} todocount={todoCount} donecount={doneCount} /> 
      </div>
    </div>
  );
}


export default App;
