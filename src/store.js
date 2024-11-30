import { configureStore } from '@reduxjs/toolkit'
import taskTrackReducer from './TaskTrackerSlice'
export const store = configureStore({
  reducer: {
    taskTracker:taskTrackReducer
  },
})

