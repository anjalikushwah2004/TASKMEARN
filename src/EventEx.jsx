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
            
        </div>
    )

}

