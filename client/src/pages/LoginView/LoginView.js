import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './Login.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaPlay } from "react-icons/fa";
import { IoIosShirt  } from "react-icons/io";
import { IoFootballSharp, IoFastFoodOutline } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { FaPencilAlt, FaFish, FaCameraRetro   } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";






export function LoginView () {

  // Estado para almacenar los productos seleccionados en la factura
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  // Estado para almacenar la información de la factura
  const [factura, setFactura] = useState({
    cliente: "Nombre del Cliente",
    fecha: "01/01/2023",
    total: 0,
  });

  // Función para agregar un producto a la factura
  const agregarProductoAFactura = (producto) => {
    // Actualizar la lista de productos seleccionados
    setProductosSeleccionados([...productosSeleccionados, producto]);

    // Actualizar el total en la factura
    setFactura({
      ...factura,
      total: factura.total + producto.precioUnitario,
    });
  };

  // Lista de productos disponibles
  const productosDisponibles = [
    { nombre: "Camisa", precioUnitario: 25000, icono: <IoIosShirt /> },
    { nombre: "Balon", precioUnitario: 35000, icono: <IoFootballSharp /> },
    { nombre: "Bebida", precioUnitario: 5000, icono: <BiSolidDrink /> },
    { nombre: "Hamburguesa", precioUnitario: 12000, icono: <IoFastFoodOutline /> },
    { nombre: "Lápiz", precioUnitario: 2000, icono: <FaPencilAlt /> },
    { nombre: "Pescado", precioUnitario: 15000, icono: <FaFish /> },
    { nombre: "Celular", precioUnitario: 600000, icono: <MdOutlinePhoneAndroid /> },
    { nombre: "Cámara", precioUnitario: 120000, icono: <FaCameraRetro  /> },
    { nombre: "Computador", precioUnitario: 800000, icono: <FaComputer  /> },
    { nombre: "Audifonos", precioUnitario: 28000, icono: <CiHeadphones /> },
  ];

  // Función para mostrar la información de la factura
  const mostrarInformacionFactura = () => {
    return (
      <div className='w-4/5 sm:w-1/2 flex flex-col justify-center items-center factura'>
  <h2 className='text-white text-lg font-bold mb-4'>FACTURA</h2>
  <div className='mt-4 text-white'>
    <p className='text-lg mb-2'>TUS PRODUCTOS</p>
    <hr></hr>
    <ul className='w-full mt-8 mb-8'>
      {productosSeleccionados.map((producto, index) => (
        <li key={index} className='flex items-center mb-2'>
          {producto.icono}
          <span className='ml-4'>{producto.nombre}</span>
          <span className='ml-4'>${producto.precioUnitario}</span>
        </li>
        
      ))}
    </ul>
    <hr></hr>
    <p className='mt-8 mb-9 text-center text-lg font-bold text-cyan-300'>vender: ${factura.total}</p>
  </div>
</div>

    );
  };

  return (
    <>
    <h1 className='train'> <span className='trainMini'> powered by </span> TRAIN | Caja Maestra</h1>
    <div className="main-container min-h-screen flex flex-col justify-center items-center">
        <div className='content'>
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

        <Link to="/services" className="play">
          <FaPlay />
        </Link>

     </div>

     {/* Flecha a la izquierda */}
     <div className="arrow left absolute bottom-0 left-0 mb-4 ml-4">
        <p className='tutorial rotate-[-90deg] w-8'>Tutorial </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8 text-cyan-400 transform rotate-180"
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
      <p className='rotate-90 tutorial w-8'>Tutorial</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8 text-cyan-400 transform rotate-180"
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

    <hr></hr>

    <div className='informacion w-full flex flex-col sm:flex-row primera'>
      <div className='w-full sm:w-1/2 flex flex-col justify-center items-center'>
        <h1 className='sub-title'>ADMINISTRA TUS PRODUCTO FÁCILMENTE</h1>
        <p className='sub-title2'>Para mostrar 5 productos por fila en lugar de uno debajo del otro, puedes ajustar la estructura de la tabla y aplicar algunas clases adicionales para controlar el diseño. Aquí tienes un ejemplo de cómo podrías modificar el código:</p>
      </div>

      <div className='w-full sm:w-1/2 flex justify-center items-center'>
        <table className='table-auto border-collapse'>
        <tbody>
  {productosDisponibles.map((producto, index) => (
    index % 5 === 0 && (
      <tr key={`row-${index / 5}`}>
        {[...Array(5).keys()].map((col) => {
          const productoIndex = index + col;
          const productoActual = productosDisponibles[productoIndex];
          const isSelected = productosSeleccionados.some(
            (selectedProducto) => selectedProducto.nombre === productoActual.nombre
          );

          return (
            <td
              key={productoIndex}
              className={`border border-white p-4 text-center ${
                isSelected ? 'text-cyan-300' : 'text-white'
              }`}
            >
              {React.cloneElement(productoActual.icono, {
                className: 'cursor-pointer icono',
                onClick: () => agregarProductoAFactura(productoActual),
              })}
            </td>
          );
        })}
      </tr>
    )
  ))}
</tbody>


        </table>
      </div>
    </div>

    <div className='informacion w-full flex flex-col sm:flex-row'>
      
    <div className='w-full sm:w-1/2 flex flex-col justify-center items-center'>
      {mostrarInformacionFactura()}
    </div>

      <div className='w-full sm:w-1/2 flex justify-center items-center'>
        <h1 className='sub-title'>CREA TUS FACTURAS</h1>
      </div>

    </div>


    <footer className='footer'>powered by TRAIN | Caja Maestra</footer>

        </div>
    
      </div>
</>
  );
};