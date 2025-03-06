import { configureStore } from '@reduxjs/toolkit'
import studentreducer from '../componet/student/StudentSlice'
import React from 'react'
const store = configureStore({reducer:{}})
student:studentreducer
export default store
  
