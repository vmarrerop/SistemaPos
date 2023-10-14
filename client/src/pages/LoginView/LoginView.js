import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export function LoginView () {
  return (
    <>
    <div className='main-container'>
      <h1 className='title overline'>Software POS</h1>
      <Link to="/services" className="services-button">INGRESAR</Link>
    </div>
    </>
  );
};