import React from 'react'
import profile from './assets/images/port pic.jpg'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function home() {
  return (
    <div>
      <section id="about"></section>
            
                <section id="cover-title"
                    className="h-screen">
                    <div className="bg-slate-700 h-full flex justify-center items-center gap-3">
                      <div>
                  <img className="w-70 transition-all duration-2 rounded-2xl" src={profile} alt="person"/></div>
                  <div className='gape-3 m-20'>
              
                   <h1 className="text-6xl text-white font-extrabold text-center">Hello,<br/>
                            I Am Anjali Kushwah
                    </h1>
                    <div className='flex gap-3'>
                    <div className='pt-10 '>
                    <a href="https://web.whatsapp.com/"><FaSquareWhatsapp className='text-white text-4xl'/>  </a>
                      </div>
                      <div className='pt-10'>
                    <a href="https://www.instagram.com/accounts/login/"><FaInstagramSquare className='text-white text-4xl' />  </a>
                      </div>
                      <div className='pt-10'>
                    <a href="https://github.com/"><FaGithubSquare  className='text-white text-4xl' /> </a>
                      </div>
                      <div className='pt-10'>
                    <a href="https://in.linkedin.com/"><FaLinkedin className='text-white text-4xl'/></a>
                      </div>
                      </div>
                    </div>
                    </div>
                    
                </section>
    </div>
  )
}
