import React from 'react'
import Address from '/Address'
import { UserpersonalDetails } from 'UserpersonalDetails'
import { useDispatch } from 'react-redux'
import {deleteuser} from 'userSlice'

export default function userdetail({user}) {
    const dispatch = useDispatch()
  return (
    <div className='shadow-2xl rounded-3xl shadow-gray-500 m-10 p-10'>
        <UserpersonalDetails name={user.name} email={user.email} />
        <Address address={user.address} />
        <button className= 'text-2xl bg-blue-300 p-3'onClick={()=>dispatch(deleteuser(user.id))}Delete></button>
      </div>
  )
}

 