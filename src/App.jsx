import Spline from '@splinetool/react-spline';
import {IoMenu} from 'react-icons/io5'
import { useState } from 'react';
 
function App() {

  const [isActive, setIsActive] = useState(false);
  
  
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justif-center relative bg-primary pb-20 ">
      {/* navbar */}
      <nav className='w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
          <p className="text-lg text-slate-200 font-medium">Novus Tech</p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              > Home</a>
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              > About</a>
              <a href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              > Contact</a>
          </div>
          <div
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase " />
            </div>
            {isActive && (
              <div
                
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </a>
              </div>)}
        </div>
      </nav>
      <div className="relative " id="home" > 
      
      {/* new bg */}
      <Spline scene="https://prod.spline.design/BdDckWFpugA51Fok/scene.splinecode" />

 
      </div>
    </div>
  );
}

export default App;
