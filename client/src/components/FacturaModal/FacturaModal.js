//import React, { useState } from 'react';
//import './Payment.scss'



export function FacturaModal({ onClose, totalAmount, selectedProducts }) {
   // Estado para almacenar el cambio

  // Calcular el total de la factura basado en los productos seleccionados


  

  // Esta función debe calcular el subtotal de la factura
  const calculateInvoiceSubtotal = () => {
    let subtotal = 0;
    selectedProducts.forEach((product) => {
      subtotal += product.precio * (product.quantity || 1); // Multiplica el precio unitario por la cantidad
    });
    return subtotal;
  };
  

// Esta función debe calcular el IVA (Impuesto al Valor Agregado) según tu lógica
const calculateInvoiceIVA = () => {
  const subtotal = calculateInvoiceSubtotal();
  const ivaRate = 0.19; // Porcentaje de IVA (19% en este ejemplo, puedes cambiarlo)
  const iva = subtotal * ivaRate;
  return iva;
};


  return (
    <div className="overlay">
      <div className="payment-modal">
          

          <div className="mini-factura">
  <h2 className="factura-title text-center">Nombre de la Empresa</h2>
  <p>Fecha: 18 de septiembre de 2023</p>
  <p>NIT: 123456789-0</p>
  <p>Dirección: Calle 123, Ciudad</p>
  <p>Teléfono: (123) 456-7890</p>
  <p>Cliente: Nombre del Cliente</p>
  <div className="factura-items">
    <div className="factura-item factura-header">
      <p>Descripción</p>
      <p>Cantidad</p>
      <p>Precio Unitario</p>
      <p>Total</p>
    </div>
    {selectedProducts.map((product) => (
      <div key={product.id} className="factura-item2">
        <p>{product.title}</p>
        <p>{product.quantity}</p> {/* Mostrar la cantidad del producto seleccionado */}
        <p>${product.precio}</p>
        <p>${product.precio * product.quantity}</p> {/* Mostrar el precio total del producto */}
      </div>
    ))}
    <div className="factura-item factura-subtotal">
      <p>Subtotal:</p>
      <p>${calculateInvoiceSubtotal()}</p>
    </div>
    <div className="factura-item factura-iva">
      <p>IVA (19%):</p>
      <p>${calculateInvoiceIVA()}</p>
    </div>
    <div className="factura-item factura-total">
      <p>Total:</p>
      <p>${totalAmount}</p>
    </div>
  </div>
</div>




        </div>
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
  );
  
  
}