import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import '../../App.scss'
import { LuMenuSquare } from 'react-icons/lu';
import { RiAccountCircleLine } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import Modal from 'react-modal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">

      
<div className="left-content">
    <Link to="/Services"><h1 className='sistema'>Sistema de gestion</h1></Link>
  </div>

      <div className="center-content">

      <button onClick={openModal} className="options-button">
        <LuMenuSquare className='icon'/>
      </button>

      {/* Ventana modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="icon-container">
          <Link to="/Services">
            <AiFillHome className="icon1" />
          </Link>
        </div>

        <div className="icon-container">
          <Link to="/Inventario">
            <p className="icon-label1">Inventario</p>
          </Link>
        </div>

        <div className="icon-container">
          <p className="icon-label2">Nómina</p>
        </div>

        <div className="icon-container">
          <p className="icon-label3">Registros</p>
        </div>

        <div className="icon-container">
          <p className="icon-label4">Analítica</p>
        </div>
        
        <button onClick={closeModal} className="close-button">
          Cerrar
        </button>
      </Modal>
      </div>

      <div className="right-content">
        <Link to="/"><RiAccountCircleLine className='icon' /></Link>
      </div>


    </div>
  );
}