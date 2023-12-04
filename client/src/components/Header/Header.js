import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import '../../App.scss'
import { LuMenuSquare } from 'react-icons/lu';
import { RiAccountCircleLine } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { BiHomeAlt2 } from 'react-icons/bi';
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
        <button className="options-button">
          <Link to="/Services">
            < BiHomeAlt2 className='icon' />
          </Link>
        </button>
      </div>

      <div className="modal-button center-content">
        <button onClick={openModal} className="options-button">
          <LuMenuSquare className="icon" />
        </button>
      </div>

      <div className="right-content">
        <Link to="/">
          <RiAccountCircleLine className="icon" />
        </Link>
      </div>

      {/* Ventana modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <Link to="/Services" className="icon-containerModal">
          <AiFillHome className="icon" />
        </Link>

        <Link to="/Inventario" className="icon-containerModal">
          <p className="icon-label1">Inventario</p>
        </Link>

        <div className="icon-containerModal">
          <p className="icon-label2">Nómina</p>
        </div>

        
        <Link to="/Facturas" className="icon-containerModal">
          <p className="icon-label3">Facturas</p>
        </Link>
        
        <div className="icon-containerModal">
          <p className="icon-label4">Analítica</p>
        </div>
        <div className="close-container">
          <button onClick={closeModal} className="close">
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
}