import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export function LoginView () {
  return (
    <>
  <div className="main-container bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <h1 className="title text-4xl md:text-6xl lg:text-8xl">
      <span className="B text-blue-500">B</span>
      <span className="O text-green-500">O</span>
      <span className="X text-red-500">X</span>
    </h1>
    <h1 className="title pos text-2xl md:text-4xl lg:text-6xl">
      <span>P</span>
      <span className="O">O</span>
      <span>S</span>
    </h1>
    <Link to="/services" className="services-button bg-blue-500 text-white px-4 py-2 mt-4">
      INGRESAR
    </Link>
  </div>
</>

  );
};