import { createSlice } from "@reduxjs/toolkit";
import store from "./Store";

const stslice=createSlice({
    name:"student",
    initialState:[],
    reducers:{
        insertStudent: (state,action)=>{
             state = [...stae,action.payload]
             return state
        }
    }
}) 
export const {initialStudent}=StudentSlice.action
export default stslice.reducer  