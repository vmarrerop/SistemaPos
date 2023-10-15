import React, { useState } from 'react';
import './Payment.scss'
import { BsCashCoin } from 'react-icons/bs';
import { ImCreditCard } from 'react-icons/im';
import { AiOutlineSend } from 'react-icons/ai';


export function PaymentModal({ isOpen, onClose, totalAmount }) {
  const [selectedPayment, setSelectedPayment] = useState('Efectivo');
  const [cashAmount, setCashAmount] = useState('');
  const [change, setChange] = useState(0);

  if (!isOpen) {
    return null;
  }

  // Función para calcular el cambio cuando cambia la cantidad de efectivo ingresada
  const handleCashAmountChange = (event) => {
    const enteredCash = parseFloat(event.target.value);
    setCashAmount(enteredCash);
    const calculatedChange = enteredCash - totalAmount;
    setChange(calculatedChange);
  };

  const renderPaymentContent = () => {
    if (selectedPayment === 'Efectivo') {
      return (
        <div>
          <p>Seleccione la denominación de billetes:</p>
          <input
            type="number"
            placeholder="Cantidad en efectivo"
            value={cashAmount}
            onChange={handleCashAmountChange}
          />
          <p>Cambio: ${change.toFixed(2)}</p>
        </div>
      );
    } else if (selectedPayment === 'Tarjeta') {
      return (
        <div>
          {/* Contenido para la opción de pago "Tarjeta" */}
          <p>Ingrese los detalles de su tarjeta:</p>
        </div>
      );
    } else if (selectedPayment === 'Nequi') {
      return (
        <div>
          {/* Contenido para la opción de pago "Nequi" */}
          <p>Ingrese su número de cuenta Nequi:</p>
        </div>
      );
    } else {
      // Mostrar un mensaje predeterminado si no se ha seleccionado una opción de pago
      return <p>Seleccione un método de pago.</p>;
    }
  };

  return (
    <div className="overlay">
      <div className="payment-modal">
        <h2 className="modal-title">Pagar Factura</h2>
        <div className="total-amount">
          <span className="text-gray-400">Total</span> ${totalAmount}
        </div>
        <h1>Metodos de pago</h1>
        <div className="payment-options">
          <div className="payment-option" onClick={() => setSelectedPayment('Efectivo')}>
            <BsCashCoin className='icono1'/>
            Efectivo
          </div>
          <div className="payment-option" onClick={() => setSelectedPayment('Tarjeta')}>
            <ImCreditCard className='icono2'/>
            Tarjeta
          </div>
          <div className="payment-option" onClick={() => setSelectedPayment('Nequi')}>
            <AiOutlineSend className='icono3' />
            Nequi
          </div>
        </div>
        {renderPaymentContent()}
        <button className="close-button" onClick={onClose}>
          x
        </button>
        <button className="close-butto mt-9" onClick={onClose} >Facturar</button>
      </div>
    </div>
  );
}