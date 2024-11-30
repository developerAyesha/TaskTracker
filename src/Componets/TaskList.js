import React from 'react';
import { DeleteTask } from '../TaskTrackerSlice';
import { useSelector ,useDispatch} from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.taskTracker.Tasks);
  console.log("tasks.......", tasks);
  const dispatch =useDispatch();

  return (
    <div className="container py-4">
     

    
      <div className="">
        {tasks && tasks.map((task, index) => (
          <div key={index} className=" d-flex justify-content-between align-items-center p-3 mb-2 shadow-sm border border-dark rounded">
         
            <div className="task-name">
              <strong className='fw-bold '>{task.name}</strong>
            </div>

          
            <div>
              
                <i className="bi bi-trash-fill " style={{color:'red'}} onClick={()=>{dispatch(DeleteTask(task.id))}}></i> 
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
