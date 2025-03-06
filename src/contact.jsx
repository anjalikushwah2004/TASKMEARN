import React from 'react'

export default function Contact() {
  return (
    <div>
       <section id="contact">
                    <h1 className="text-4xl text-center">
                        Contact
                    </h1>
                    <div className="flex justify-center items-center">
                        <h1 class="text-3xl w-full text-center">
                            Contact Me
                        </h1>
                        <div className="shadow-xl shadow-gray-600 rounded-2xl w-full p-24">
                            <input placeholder="Enter Your Name" type="text" className="w-full border-2 shadow-lg rounded-sm shadow-gray-600"/>
                            <input placeholder="Enter Your Email" type="email" className="mt-12 w-full border-2 shadow-lg rounded-sm shadow-gray-600"/>
        <textarea className="mt-11 w-full h-52 shadow-lg border-2" name="" id=""></textarea>
        <button className="bg-blue-400 rounded-sm p-4 w-full">Submit</button>
                        </div>
                    </div>
        
                   
                </section>
    </div>
  )
}
