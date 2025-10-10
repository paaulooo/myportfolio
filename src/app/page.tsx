'use client'

import MouseBlob from "./mouseBlob";
import { useState } from "react";
//import SideBar from "./sideBar";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <body className="selection:bg-purple-900 scroll-smooth">
      
    

    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col font-mono">

      <MouseBlob/>

      {/* Desktop Navigation */}
      <nav className="fixed top-1/2 left-0 -translate-y-1/2 z-50 p-4 hidden md:block">
        <ul className="list-none space-y-6">
          <li><a href="#home"><div className="w-3 h-3 bg-gray-500 rounded-full transition-colors duration-300 hover:bg-white"></div></a></li>
          <li><a href="#projects"><div className="w-3 h-3 bg-gray-500 rounded-full transition-colors duration-300 hover:bg-white"></div></a></li>
          <li><a href="#about"><div className="w-3 h-3 bg-gray-500 rounded-full transition-colors duration-300 hover:bg-white"></div></a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center space-y-1"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-12 right-0 bg-gray-700/15 backdrop-blur-lg rounded-lg p-4 min-w-[250px]">
            <ul className="list-none space-y-4">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 transition-colors">Projects</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 transition-colors">About</a></li>
            </ul>
          </div>
        )}
      </nav>
      
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-6 px-4 py-8">
          <h1 className="animate-pulse text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold duration-700 transition-all transition-discrete hover:text-5xl">
            Paulo Fernandes<br/>
            Software Engineer - Back End
          </h1>
          <ol className="flex flex-row text-4xl gap-x-3 sm:gap-x-4 md:gap-x-6 flex-wrap justify-center">
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" alt="" /></li>
            <li><img className="transition-all max-w-[25px] sm:max-w-[30px] md:max-w-[40px] transition-discrete hover:scale-200 translate-z-0" src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="" /></li>
          </ol>
        </div>
      </section>
      
      <section id="projects" className="flex flex-col items-center gap-y-6 sm:gap-y-10 min-h-screen py-8 sm:py-12 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-pulse text-center">
            Projects
            </h1>
        <div className="flex flex-col items-center max-w-5xl px-4 sm:px-8 md:px-20 mx-auto w-full">
          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-wrap gap-4 sm:gap-6 md:gap-8 w-full bg-gray-700/15 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-[15] justify-center">
            <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[250px] relative min-h-[200px] sm:h-70 bg-black-200/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 animate-pulse transition-all transition-discrete hover:scale-110 translate-z-0 hover:animate-none flex flex-col">
            <div className="text-justify flex flex-col gap-3 px-3 py-3 flex-grow">
              <h1 className="text-center text-sm sm:text-base">Nex - Back End</h1>
              <p className="text-xs sm:text-sm flex-grow">Nex is a personal project intended to be a complete HR system, assisting the team in performing tasks, developing employees, and generally facilitating people management within the company.</p>
              <div className="flex justify-center pt-3 pb-3">
                <a href="https://github.com/paaulooo/Nex"
                className="flex justify-center items-center w-20 sm:w-25 h-6 sm:h-7 bg-white rounded-lg transition-all transition-discrete hover:scale-105 translate-z-0" target="_blank"
                ><label className="text-black text-xs sm:text-sm">Github</label>
                </a>
              </div>
              
            </div>
            </div>
            <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[250px] relative min-h-[200px] sm:h-70 bg-black-200/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 animate-pulse transition-all transition-discrete hover:scale-110 translate-z-0 hover:animate-none flex flex-col">
            <div className="text-justify flex flex-col gap-3 px-3 py-3 flex-grow">
              <h1 className="text-center text-sm sm:text-base">REST API</h1>
              <p className="text-xs sm:text-sm flex-grow">Personal Expense Control REST API Developed with Spring Boot. Allows you to register, list, filter, and delete expenses.</p>
              <div className="flex justify-center pt-3 pb-3">
                <a href="https://github.com/paaulooo/API-Gestor-De-Gastos"
                className="flex justify-center items-center w-20 sm:w-25 h-6 sm:h-7 bg-white rounded-lg transition-all transition-discrete hover:scale-105 translate-z-0" target="_blank"
                ><label className="text-black text-xs sm:text-sm">Github</label>
                </a>
              </div>
              
            </div>
            </div>
            <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[250px] relative min-h-[200px] sm:h-70 bg-black-200/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 animate-pulse transition-all transition-discrete hover:scale-110 translate-z-0 hover:animate-none flex flex-col">
            <div className="text-justify flex flex-col gap-3 px-3 py-3 flex-grow">
              <h1 className="text-center text-sm sm:text-base">Oraculus</h1>
              <p className="text-xs sm:text-sm flex-grow">This project uses Python and SpeechRecognition with other libraries to capture your voice and give a command to your PC, with this you can open your browser, or any program.</p>
              <div className="flex justify-center pt-3 pb-3">
                <a href="https://github.com/paaulooo/Speech-Recognition-with-Python"
                className="flex justify-center items-center w-20 sm:w-25 h-6 sm:h-7 bg-white rounded-lg transition-all transition-discrete hover:scale-105 translate-z-0" target="_blank"
                ><label className="text-black text-xs sm:text-sm">Github</label>
                </a>
              </div>
              
            </div>
            </div>
            <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[250px] relative min-h-[200px] sm:h-70 bg-black-200/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 animate-pulse transition-all transition-discrete hover:scale-110 translate-z-0 hover:animate-none flex flex-col">
            <div className="text-justify flex flex-col gap-3 px-3 py-3 flex-grow">
              <h1 className="text-center text-sm sm:text-base">Banana Clicker</h1>
              <p className="text-xs sm:text-sm flex-grow">A Banana Clicker Game Clone for android, this project was developed with Java in Android Studio.</p>
              <div className="flex justify-center pt-3 pb-3">
                <a href="https://github.com/paaulooo/Banana-Clicker-Android"
                className="flex justify-center items-center w-20 sm:w-25 h-6 sm:h-7 bg-white rounded-lg transition-all transition-discrete hover:scale-105 translate-z-0" target="_blank"
                ><label className="text-black text-xs sm:text-sm">Github</label>
                </a>
              </div>
              
            </div>
            </div>
            <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[250px] relative min-h-[200px] sm:h-70 bg-black-200/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 animate-pulse transition-all transition-discrete hover:scale-110 translate-z-0 hover:animate-none flex flex-col">
            <div className="text-justify flex flex-col gap-3 px-3 py-3 flex-grow">
              <h1 className="text-center text-sm sm:text-base">URLshorts</h1>
              <p className="text-xs sm:text-sm flex-grow">A URL shortener developed using Java, Spring, PostgreSQL, Gradle, Shell script for testing and insomnia for REST API tests (GET, POST).</p>
              <div className="flex justify-center pt-3 pb-3">
                <a href="https://github.com/paaulooo/urlshorts"
                className="flex justify-center items-center w-20 sm:w-25 h-6 sm:h-7 bg-white rounded-lg transition-all transition-discrete hover:scale-105 translate-z-0" target="_blank"
                ><label className="text-black text-xs sm:text-sm">Github</label>
                </a>
              </div>
              
            </div>
            </div>
            
            
          </div>
        </div>
      </section>
      <section id="about" className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-5 min-h-screen py-8 sm:py-12 px-4">
        <div className="flex flex-col gap-y-3 max-w-2xl w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold animate-pulse">About me</h1>
          <div className="flex gap-x-3 flex-wrap">
            <a href="https://www.linkedin.com/in/paulorobertofer/" target="_blank">
              <img className="max-w-[40px] sm:max-w-10 transition-all transition-discrete hover:scale-120 translate-z-0" src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt=""/>
            </a>
            <a href="https://github.com/paaulooo" target="_blank">
              <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" className="max-w-[40px] sm:max-w-10 transition-all transition-discrete hover:scale-120 translate-z-0"/>
            </a>
          </div>
          <p className="text-sm sm:text-base text-justify">I am a Brazilian Software Engineering student passionate about creating efficient and scalable technological solutions. With a solid foundation in object-oriented programming, my current main focus is on development using Java, while also actively exploring other modern languages and frameworks. I seek to apply my theoretical knowledge to practical projects that generate value, transforming complex ideas into functional and high-quality software. I am constantly learning and ready for the challenges of engineering.</p>
          
        </div>
      </section>

    </div>
    </body>
  );
}
