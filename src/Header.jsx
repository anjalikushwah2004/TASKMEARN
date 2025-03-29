import React from 'react'

import {Link} from 'react-router'




export default function Header() {
  return (
    <>
     <header className="bg-slate-800 text-white flex px-14 py-8 justify-between">
            <h1 className="text-3xl font-extrabold">portfolio</h1>
            <ul class="flex">
            <li className="me-4 shadow-lg shadow-slate-400 rounded-2xl p-2"><Link to="/Home">Home</Link></li>
                <li className="me-4 shadow-lg shadow-slate-400 rounded-2xl p-2"><Link to="/About">About</Link></li>
                <li className="me-4 shadow-lg shadow-slate-400 rounded-2xl p-2"><Link to="/Project">Projects</Link></li>
                <li className="me-4 shadow-lg shadow-slate-400 rounded-2xl p-2"><Link to="/Task">Tasks</Link></li>
                <li className="me-4 shadow-lg shadow-slate-400 rounded-2xl p-2"><Link to="/Contact">Contact</Link></li>
            </ul>
        </header>
    </>
  )
}
