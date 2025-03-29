import React from 'react'

export default function Contact() {
  return (
    <div className='bg-slate-700  flex justify-center items-center'>
       <section id="contact">
                    <h1 className="text-4xl text-center text-white m-3">
                        Contact Me
                    </h1>
                    <div className="flex justify-center items-center h-screen w-20 ">
                     
                        <div className="shadow-xl shadow-gray-600 rounded-2xl w-2xl p-24 bg-slate-800">
                            <input placeholder="Enter Your Name" type="text" className="w-96 border-2 shadow-lg rounded-sm shadow-gray-600 text-white"/>
                            <input placeholder="Enter Your Email" type="email" className="mt-12 w-96 border-2 shadow-lg rounded-sm shadow-gray-600 text-white"/>
        <textarea className="mt-11 w-full h-52 shadow-lg border-2 text-white" name="" id=""></textarea>
        <button className="bg-blue-400 rounded-sm p-4 w-full text-white">Submit</button>
                        </div>
                    </div>
                  
                   
                </section>
    </div>
  )
}
