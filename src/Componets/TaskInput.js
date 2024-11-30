import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { AddTask } from '../TaskTrackerSlice'
const TaskInput = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
   
    formState: { errors },
  } = useForm()
  const TaskAdded =(data)=>{
    console.log("data",data.TaskName);
     dispatch(AddTask(data.TaskName))
     reset();
   
  }
  return (
    
   <form className='d-flex justify-content-center align-items-center py-4'   onSubmit={handleSubmit(TaskAdded) }>
    <input  placeholder='Enter Task Name' className='border rounded  border-dark border-4 w-50 py-1 px-2' {...register('TaskName',{required:{value:true,message:"Task name is required"}})} />
    {errors.TaskName && <p>{errors.TaskName.message}</p>}
    <button type="submit" className="btn btn-primary mx-3 px-4 ">Add Task</button>
   </form>
 

  )
}

export default TaskInput