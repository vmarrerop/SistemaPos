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
        <button className="options-button">
          <Link to="/Services">
            <LuMenuSquare className="icon" />
          </Link>
        </button>
      </div>

      <div className="center-content hidden md:flex justify-center">
        <Link to="/Inventario" className="icon-container">
          <p className="icon-label">Inventario</p>
        </Link>
        <div className="icon-container">
          <p className="icon-label">Nómina</p>
        </div>
        <div className="icon-container">
          <p className="icon-label">Registros</p>
        </div>
        <div className="icon-container">
          <p className="icon-label">Analítica</p>
        </div>
      </div>

      <div className="right-content">
        <Link to="/">
          <RiAccountCircleLine className="icon" />
        </Link>
      </div>

      <div className="modal-button md:hidden">
        <button onClick={openModal} className="options-button">
          <LuMenuSquare className="icon" />
        </button>
      </div>

      {/* Ventana modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <Link to="/Services" className="icon-container">
          <AiFillHome className="icon" />
        </Link>
        <Link to="/Inventario" className="icon-container">
          <p className="icon-label">Inventario</p>
        </Link>
        <div className="icon-container">
          <p className="icon-label">Nómina</p>
        </div>
        <div className="icon-container">
          <p className="icon-label">Registros</p>
        </div>
        <div className="icon-container">
          <p className="icon-label">Analítica</p>
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