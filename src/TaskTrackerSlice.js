import { createSlice } from '@reduxjs/toolkit'
const initialState = {
   Tasks:[]
  }
  
  export const TaskTrackerSlice =createSlice({
    name:'TaskTracker',
    initialState,
    reducers:{
        AddTask:(state,action)=>{
          const newTask=action.payload;
          console.log('task name ,...........',newTask)
          state.Tasks.push({id:Date.now(),name:newTask})
        },
        DeleteTask:(state,action)=>{
          const id=action.payload;
          console.log("id.....",id);
          state.Tasks = state.Tasks.filter(task=>task.id!==id)
        }
        
    }
  })
  export const {AddTask,DeleteTask}=TaskTrackerSlice.actions;
  export default TaskTrackerSlice.reducer

 
  
  