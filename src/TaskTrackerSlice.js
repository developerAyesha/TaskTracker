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
        
    }
  })
  export const {AddTask}=TaskTrackerSlice.actions;
  export default TaskTrackerSlice.reducer

 
  
  