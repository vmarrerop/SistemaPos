import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { LuMonitorSmartphone } from 'react-icons/lu'


export function LoginView () {
  return (
    <>
  <div className="main-container min-h-screen flex flex-col justify-center items-center">
    
    <div className='message-capsule'>
      <div className='seccion-izquierda w-2/3 flex flex-col justify-center items-center'>
        <p className='message'>Administra de forma increíble con</p>
      </div>
      <div className='seccion-derecha w-1/3 flex flex-col justify-center items-center'>
        
      </div>
    </div>
    <h1 className="title pos">
      Caja Maestra
    </h1>
    <Link to="/services" className="services-buttonn ">
      INGRESAR
    </Link>
    <hr></hr>
    <div className='message-capsule'>
      <div className='seccion-izquierda w-2/3 flex flex-col justify-center items-center'>
        <p className='message2'>Tu tienda en cualquier dispositivo</p>
      </div>
      <div className='seccion-derecha w-1/3 flex flex-col justify-center items-center'>
        <LuMonitorSmartphone className='icono-inicio' />
      </div>
    </div>
  </div>
</>

  );
};