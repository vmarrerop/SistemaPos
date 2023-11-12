import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { LuMonitorSmartphone } from 'react-icons/lu'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export function LoginView () {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Ajusta la velocidad de reproducción según tus necesidades
    cssEase: 'linear',
    arrows: false,
  };

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

    

    <div className='message-capsule2'>
      <div className='seccion-izquierda w-2/3 flex flex-col justify-center items-center'>
        <Slider className="slider" {...settings}>
          <div>
            <h1>Facturación</h1>
          </div>
          <div>
            <h1>Inventario</h1>
          </div>
          <div>
            <h1>Nómina</h1>
          </div>
          <div>
            <h1>Analítica</h1>
          </div>
        </Slider>
      </div>
      <div className='seccion-derecha w-1/3 flex flex-row justify-center items-center'>
        <p className='message2'>Tu tienda en cualquier dispositivo</p>
        <LuMonitorSmartphone className='icono-inicio' />
      </div>
    </div>
  </div>
</>
  );
};