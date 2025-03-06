import React from 'react'

export default function About() {
  return (
    <div>
      <section id="about"></section>
          
                <section id="cover-title"
                    className=" h-96 bg-[url(girl image.webp)] bg-no-repeat  bg-cover">
                    <div className="bg-black/50 h-full flex justify-center items-center">
        
                        <h1 className="text-6xl text-white font-extrabold text-center">
                            Hello, I Am A Full Stack Developer
                        </h1>
                    </div>
                </section>
                <section id="about" className="flex py-24 px-36">
                    <div className="shadow-2xl shadow-gray-600 me-8">
                        <img className="w-96 hover:w-full transition-all duration-700" src="girl image.webp" alt="person"/>
                    </div>
                    <div className="shadow-2xl transition-all shadow-gray-600 p-4 
                    hover:shadow
                    hover:bg-red-100
                    ">
                        <h2>About</h2>
                        <p>I Am Anjali kushwah</p>
                    </div>
                </section>
    </div>
  )
}
