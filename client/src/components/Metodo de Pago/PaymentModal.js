import React, { useState } from 'react';
import './Payment.scss'
import { BsCashCoin } from 'react-icons/bs';
import { ImCreditCard } from 'react-icons/im';
import { AiOutlineSend } from 'react-icons/ai';


export function PaymentModal({ isOpen, onClose, totalAmount }) {
    const [selectedPayment, setSelectedPayment] = useState(null);
  
    if (!isOpen) {
      return null;
    }
  
    const renderPaymentContent = () => {
      if (selectedPayment === 'Efectivo') {
        return (
          <div>
            {/* Contenido para la opción de pago "Efectivo" */}
            <p>Seleccione la denominación de billetes:</p>
            {/* Agregar más contenido específico para Efectivo */}
          </div>
        );
      } else if (selectedPayment === 'Tarjeta') {
        return (
          <div>
            {/* Contenido para la opción de pago "Tarjeta" */}
            <p>Ingrese los detalles de su tarjeta:</p>
            {/* Agregar más contenido específico para Tarjeta */}
          </div>
        );
      } else if (selectedPayment === 'Nequi') {
        return (
          <div>
            {/* Contenido para la opción de pago "Nequi" */}
            <p>Ingrese su número de cuenta Nequi:</p>
            {/* Agregar más contenido específico para Nequi */}
          </div>
        );
      } else {
        // Mostrar un mensaje predeterminado si no se ha seleccionado una opción de pago
        return <p>Seleccione un método de pago.</p>;
      }
    };
  
    return (
      <div className='overlay'>
        <div className="payment-modal">
          <h2 className="modal-title">Pagar Factura</h2>
          <div className="total-amount"><span className='text-gray-400'>Total</span> ${totalAmount}</div>
          <h1>Metodos de pago</h1>
          <div className="payment-options">
            <div
              className="payment-option"
              onClick={() => setSelectedPayment('Efectivo')}
            >
              <BsCashCoin className='icono1'/>
              <p>Efectivo</p>
            </div>
            <div
              className="payment-option"
              onClick={() => setSelectedPayment('Tarjeta')}
            >
              <ImCreditCard className='icono2'/>
              <p>Tarjeta</p>
            </div>
            <div
              className="payment-option"
              onClick={() => setSelectedPayment('Nequi')}
            >
              <AiOutlineSend className='icono3' />
              <p>Nequi</p>
            </div>
          </div>
          {renderPaymentContent()}
          <button className="close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    );
  }