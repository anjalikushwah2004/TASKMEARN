 import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '/userSlice'
 
 export default function () {
    const dispatch =useDispatch()
    const listOfUser = useSelector(state=>state.user.list)
    const selectedUser = useSelector (state=>state.user.selectedUser)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
   return (
     <div className='flex'>
        <div className='w-1/3'>
        {
            listOfUser.map((user))=>
                <div key={user.id}>

                </div>
        }

        </div>
       
     </div>
   )
 }
 