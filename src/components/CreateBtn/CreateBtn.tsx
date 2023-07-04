import React, { useState } from 'react';
import { Task } from './../Task/taskType';
import './CreateBtn.css'

interface CreateBtnProps {
  onTaskSubmit: (newTask: Task) => void;
}

const CreateBtn = ({ onTaskSubmit }: CreateBtnProps) => {
  const [taskData, setTaskData] = useState<Task>({
    title: '',
    description: '',
    author: '',
    priority: '',
   isDone: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setTaskData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const newTask = {
      title: taskData.title,
      description: taskData.description,
      author: taskData.author,
      priority: taskData.priority,
     isDone: taskData.isDone
    };

    onTaskSubmit(newTask);

    setTaskData({
      title: '',
      description: '',
      author: '',
      priority: '',
     isDone: false
    });
  };

  return (
    <div>
      <div className='d-flex flex-row p-2 row'>
        
        <div className='col-xl-3 col-lg-5 col-md-6 col-sm-7 d-flex w-70'>
          <h1 className='text-center align-self-center'>Create New Task</h1>
        </div>
        <div className='col-1 col-md-1 col-sm-1 d-flex justify-content-center'>
          <button type="button" className="btn btn-primary fs-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
          +
          </button>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column justify-content-center">
              <p className='modal-title h1 mt-4'>Create Task</p>
              <input type='text' placeholder='Title' className="modal-input modal-title fs-4 mt-4" id="title" name="title" value={taskData.title} onChange={handleChange}></input>
              <input type='text' placeholder='Description' className="modal-input modal-title fs-4 mt-4" id="description" name="description" value={taskData.description} onChange={handleChange}></input>
              <input type='text' placeholder='Author' className="modal-input modal-title fs-4 mt-4" id="author" name="author" required={true} value={taskData.author} onChange={handleChange}></input>
              {/* <input type='dropdown' placeholder='Priority' className="modal-title fs-4 mt-4" id="priority" name="priority"  required={true} value={taskData.priority} onChange={handleChange}></input> */}

              <label className='fs-4 mt-4'>Priority:  
                <select name="priority" id="priority" value={taskData.priority} onChange={handleChange}>
                  <option value="None">None</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select> 
              </label>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSubmit}>Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBtn;
