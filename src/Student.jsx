import React from 'react'

function Student({ index, name, surname, age, address, city}) {
    function DeleteStudent(){
        alert("Student" +name+ "deleted")
    }
  return (
    <div className='p-6 m-6 shadow-2xl shadow-gray-400'>
        <h1 className='text-4xl'>Student Name: (name) (surname)</h1>
      <h2 className='text-xl'>Age: (age)</h2>
      <h2 className='text-xl'>Address: (Address), (city)</h2>
      <button onClick={() => alert ("student deleted")}>
           Delete using arrow function
            </button>
            <button onClick={deletestudent}>
                delete using function
            </button>
    </div>
  )
}

export default Student
