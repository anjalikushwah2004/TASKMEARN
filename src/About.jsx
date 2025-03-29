import React from 'react'
import profile from './assets/images/port pic.jpg'
export default function About() {
  return (
    <div className='bg-slate-700'>
      <section id="about"></section>
          <section id="about" className="flex py-24 px-36">
                    <div className="shadow-2xl shadow-gray-600 me-8">
                        <img className="w-96 transition-all duration-700" src={profile} alt="person"/>
                    </div>
                    <div className="shadow-2xl transition-all shadow-gray-600 p-4
                    hover:shadow hover:bg-blue-900 justify-center items-center">
                        <h2 className=' hover:bg-cyan-900 text-white font-bold text-4xl'>About</h2>
                        <p className='text-white'>Hello, i Am Anjali kushwah,<br/>i am full stack devloper presantly i am pursuing B.tech from shri dadaji institute technology and science. </p>
                    </div>
                </section>
    </div>
  )
}
