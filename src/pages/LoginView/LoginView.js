import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaPlay } from "react-icons/fa";


export function LoginView () {

  return (
    <>
    <h1 className='train'> <span className='trainMini'> powered by </span> TRAIN | Caja Maestra</h1>
  <div className="main-container min-h-screen flex flex-col justify-center items-center">
    
    <div className='inicio flex flex-col justify-center items-center'>
    
    <div className='message-capsule'>
      <div className='seccion-izquierda w-2/3 flex flex-col justify-center items-center'>
        <p className='message'>Administra de forma increíble con</p>
      </div>
      <div className='derecha w-1/3 flex flex-col justify-center items-center'>
        
      </div>
    </div>
    
     <div className='seccion-titulo flex flex-col justify-center items-center'>
        <h1 className="text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl pos title">
          CAJA MAESTRA
        </h1>
        <br></br>

        <Link to="/services" className="play arrow">
          <FaPlay />
        </Link>

     </div>

     {/* Flecha a la izquierda */}
     <div className="arrow left absolute bottom-0 left-0 mb-4 ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8 text-white transform rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>

      {/* Flecha a la derecha */}
      <div className="arrow right absolute bottom-0 right-0 mb-4 mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8 text-white transform rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </div>

    <footer className='footer'>POWERED BY Train | Caja Maestra</footer>

  </div>
</>
  );
};