import { useEffect, useState } from 'react'
import userDetail from './UserDetails'
import axios from 'axios'
export default function User() {
    const [listOfUsers, setlistOfUsers] =useState([])
    const [selectedUser,setSelectedUser] =useState(null)
    useEffect(()=> {
        async function getData() {
         let response =await axios.get("https://jsonplaceholder.typicode.com/users")
         if (response.status === 200) {
            setlistOfUsers(response.data)
         }  
        }
        getData()
    }, [])
    return (
        function(){
          <div className='flex'>
            <div className='w-1/3'>
             {
                listOfUsers.map((user))
             }
            </div>

          </div>
        }
    )
}