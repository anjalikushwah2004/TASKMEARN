import React from 'react'
import About from './About'
import Projects from './projects'
import Task from './Task'
import Contact from './Contact'
import {Link} from 'react-router'




export default function header() {
  return (
    <>
     <header className="bg-black text-white flex px-14 py-8 justify-between">
            <h1 className="text-3xl font-extrabold">portfolio</h1>
            <ul class="flex">
                <li className="me-4"><Link to="/home">Home</Link></li>
                <li className="me-4"><Link to="/about">About</Link></li>
                <li className="me-4"><Link to="/Projects">Projects</Link></li>
                <li className="me-4"><Link to="/task">Tasks</Link></li>
                <li className="me-4"><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    </>
  )
}
