import React,{useState} from 'react'
import { useForm } from "react-hook-form"

const TaskInput = () => {
   const[tasks,setTasks]=useState([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const AddTask =(data)=>{
    console.log("data",data);
    setTasks([...tasks,{"name":data.TaskName}]);
    console.log(tasks);
  }
  return (
    <div>
   <form className='d-flex justify-content-center align-items-center p-5'   onSubmit={handleSubmit(AddTask) }>
    <input  className=' border-2 rounded' {...register('TaskName',{required:{value:true,message:"Task name is required"}})} />
    <button type="submit" className="btn btn-primary mx-3 ">Add Task</button>
   </form>
   </div>

  )
}

export default TaskInput