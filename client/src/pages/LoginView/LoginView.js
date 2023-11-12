import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { LuMonitorSmartphone } from 'react-icons/lu'
import { IoIosPhonePortrait } from 'react-icons/io'
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


     <div className='seccion-titulo flex flex-col justify-center items-center'>
        <h1 className="title pos">
          Caja Maestra
        </h1>
        <br></br>
        <Link to="/services" className="services-buttonn ">
          INGRESAR
        </Link>
     </div>

    

    <div className='message-capsule2'>
      <div className='seccion-izquierda w-3/5 flex flex-col justify-center items-center'>
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
      <div className='seccion-derecha w-2/5 flex flex-col justify-center items-center'>
        <p className='message2'>Tu tienda en cualquier dispositivo</p>
        <LuMonitorSmartphone className='icono-inicio' />
      </div>
    </div>

    <IoIosPhonePortrait className='icono-inicio2' />

  </div>
</>
  );
};