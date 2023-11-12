import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from './productos.jpg'


export function LoginView () {

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Ajusta la velocidad de reproducción según tus necesidades
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
      <div className='derecha w-1/3 flex flex-col justify-center items-center'>
        
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

    
    <div className='message-capsule'>
      <div className='seccion-izquierda w-1/2 flex flex-col justify-center items-center'>
        <Slider className='slider' {...settings}>
          <div>
            <img src={images} alt="imagen" className='icono-inicio2' />
          </div>
          <div>
            <img src={images} alt="imagen" className='icono-inicio2' />
          </div>
          <div>
            <img src={images} alt="imagen" className='icono-inicio2' />
          </div>
        </Slider>
      </div>
      <div className='derecha w-1/2 flex flex-col justify-center items-center'>
      <Slider className='slider' {...settings}>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='descripcion'>FACTURAS</h1>
            <p className='sub-descripcion'>Controla las ventas de tu negocio generando facturas en segundos</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='descripcion'>INVENTARIO</h1>
            <p className='sub-descripcion'>Conoce toda la información de ts productos</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='descripcion'>NÓMINA</h1>
            <p className='sub-descripcion'>Maneja la información de tus empleados de forma segura</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='descripcion'>CONOCE TU NEGOCIO</h1>
            <p className='sub-descripcion'>Encuentra analítica de datos de tu empresa y hazla crecer</p>
          </div>
        </Slider>
      </div>
    </div>

  </div>
</>
  );
};