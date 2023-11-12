import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export function LoginView () {
  return (
    <>
  <div className="main-container min-h-screen flex flex-col justify-center items-center">
    
    <div className='message-capsule'>
      <p className='message'>Administra de forma increíble con</p>
    </div>
    <h1 className="title pos">
      Caja Maestra
    </h1>
    <Link to="/services" className="services-buttonn ">
      INGRESAR
    </Link>
  </div>
</>

  );
};