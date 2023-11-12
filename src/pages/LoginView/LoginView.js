import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export function LoginView () {
  return (
    <>
  <div className="main-container min-h-screen flex flex-col justify-center items-center">
    <h1 className="title pos md:text-4xl lg:text-6xl">
      <span className='X'>C</span>a<span className='O'>j</span>a
    </h1>
    <h1 className='title pos md:text-4xl lg:text-6xl'>
      M<span className='B'>a</span>es<span className='O'>t</span><span className='X'>r</span>a
    </h1>
    <Link to="/services" className="services-button bg-blue-500 text-white px-4 py-2 mt-4">
      INGRESAR
    </Link>
  </div>
</>

  );
};