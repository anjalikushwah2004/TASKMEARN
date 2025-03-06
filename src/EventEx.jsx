import React, { useState } from "react";



export default function EventEx(){
    const [mystudent, setmystudent] =useState({
     name: "Sita",
     surname: "Sharma"  
    }) 

    const handleClickEvent = () => {
        setmystudent({
        name: "Sita",
        surname: "Sharma"  
       }) 
    }
       const changeNameHandler = () => {
        setmystudent({
        name: "Sita",
        surname: "Sharma"  
       }) 
    }
    return(
        <div>
           <h1 className="text-5xl">
            (mystudent.name) (mystudent.surname)
            </h1> 
            <button className="p-6 m-6 rounded-2xl bg-blue-300 hover:bg-blue-400" onClick={handleClickEvent} >change student</button>
            <button className="p-6 m-6 rounded-2xl bg-blue-300 hover:bg-blue-400" onClick={changeNameHandler} >change Name</button>
            <button className="p-6 m-6 rounded-2xl bg-blue-300 hover:bg-blue-400" onClick={changeSurname} >change Surname</button>
        </div>
    )

}

