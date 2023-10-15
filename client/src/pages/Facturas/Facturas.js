import { usePosts } from "../../context/postContext";
import { PostCard } from "../../components/PostCard/PostCard";
///import './Service.scss';
import '../../App.scss'
import React, { useState } from 'react';
import { ModalComponent } from "../../components/Modal/ModalCreateItem";
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Header } from "../../components/Header/Header";
import { FacturaModal } from "../../components/FacturaModal/FacturaModal";

export function Facturas() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [setSelectedProduct] = useState(null);
  const [selectedColor] = useState('');
  const [isQuantityExceeded, setIsQuantityExceeded] = useState(false); // Nuevo estado
  const [showQuantityWarning, setShowQuantityWarning] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);


  const handleEditProduct = (product) => {
    const isSelected = selectedProducts.some((selectedProduct) => selectedProduct._id === product._id);
  
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((selectedProduct) => selectedProduct._id !== product._id));
      setSelectedProduct(null);
    } else {
      // Verifica si la cantidad de producto es 0 o vacía
      if (product.cantidad === 0 || !product.cantidad) {
        // Muestra el modal de advertencia
        setShowQuantityWarning(true);
      } else {
        const updatedProduct = { ...product, quantity: 1 };
        setSelectedProducts([...selectedProducts, updatedProduct]);
        setSelectedProduct(updatedProduct);
      }
    }
  };

  const handleIncrement = (product) => {
    // Obtiene la cantidad disponible del producto
    const availableQuantity = product.cantidad || 0;
    const currentQuantity = getProductQuantity(product);
  
    if (currentQuantity < availableQuantity) {
      const updatedProducts = selectedProducts.map((p) => {
        if (p._id === product._id) {
          return { ...p, quantity: (p.quantity || 0) + 1 };
        }
        return p;
      });
      setSelectedProducts(updatedProducts);
    } else {
      // Muestra la ventana modal de advertencia
      setShowQuantityWarning(true);
    }
  };
  
  const handleDecrement = (product) => {
    // Decrementa la cantidad solo si es mayor que cero
    const currentQuantity = getProductQuantity(product);
  
    if (currentQuantity > 1) {
      const updatedProducts = selectedProducts.map((p) => {
        if (p._id === product._id) {
          return { ...p, quantity: (p.quantity || 0) - 1 };
        }
        return p;
      });
      setSelectedProducts(updatedProducts);
    } else {
      // Si la cantidad llega a 0, elimina el producto de la lista de seleccionados
      const updatedProducts = selectedProducts.filter((p) => p._id !== product._id);
      setSelectedProducts(updatedProducts);
    }
  };
  

  const getProductQuantity = (product) => {
    return product.quantity || 0;
  };

  const calculateProductTotal = (product) => {
    return (product.precio || 0) * (product.quantity || 0);
  };

  const calculateInvoiceTotal = () => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += calculateProductTotal(product);
    });
    return total;
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderPost = () => {
    if (posts.length === 0)
      return (
        <div className="flex flex-col justify-center items-center">
          {/* ... */}
        </div>
      );

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            onEdit={() => handleEditProduct(post)}
            isSelected={selectedProducts.some((selectedProduct) => selectedProduct._id === post._id)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="main">
      <Header />
      <div className={`main-content ${selectedColor}`}></div>
      <div className="w-full flex">
        <div className="w-2/3 sm:w-full side left">
          <header className={`main-content ${selectedColor} flex justify-between items-center my-4 background-main`}>
            <h1 className="font-bold titulo text-2xl ml-5">
              Productos ({posts.length})
            </h1>
          </header>
          <div className={`main-content ${selectedColor} Productos background-main`}>
            {renderPost()}
            <ModalComponent
              isOpen={isModalOpen}
              onRequestClose={closeModal}
            />
          </div>
        </div>
        <div className="w-1/3 sm:w-full side Factura">
          <h1 className="font-bold titulo text-2xl overline">Factura de venta</h1>
          <hr />
          <div className="flex items-center cliente">
            <p>Cliente: </p>
            <select className="select">
              <option value="cliente-regular">Cliente regular</option>
              <option value="cliente-extraordinario">Cliente extraordinario</option>
              <option value="empleado">Empleado</option>
            </select>
            <button className="boton-nuevo ml-9">Nuevo</button>
          </div>
          <hr />
          <div className="capsula-producto">
            {selectedProducts.map((product) => (
              <div key={product._id} className="informacion-producto">
                <div className="flex justify-between items-center">
                  <div className="font-bold w-1/4">{product.title}</div>
                  <div className="sumar flex justify-center items-center w-1/3">
                    <button className="mr-2" onClick={() => handleDecrement(product)}>
                      <AiOutlineMinusCircle className="text-white" />
                    </button>
                    <div className="mx-2 text-white">{getProductQuantity(product)}</div>
                    <button className="ml-2" onClick={() => handleIncrement(product)}>
                      <AiOutlinePlusCircle className="text-white" />
                    </button>
                  </div>
                  <div className="text-sm w-1/4 text-right">
                    ${product.precio * getProductQuantity(product)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="seccion-vender">
        <div className="flex justify-between">
          <button
            className="flex w-full justify-between"
            onClick={() => setIsPaymentModalOpen(true)} // Abre el modal de opciones de pago
          >
            <p className="text-factura">VENDER</p>
            <p className="text-factura">${calculateInvoiceTotal()}</p>
          </button>
        </div>
      </div>

        </div>
      </div>
      {isQuantityExceeded && (
        <div className="error-message">
          La cantidad de productos no es suficiente.
          <button onClick={() => setIsQuantityExceeded(false)}>Cerrar</button>
        </div>
      )}
      {showQuantityWarning && (
        <div className="modal-warning">
          No tienes la cantidad suficiente. Revisa tu inventario.
          <button onClick={() => setShowQuantityWarning(false)}>Cerrar</button>
        </div>
      )}

      {/* Renderiza el modal de opciones de pago */}
      <FacturaModal
  isOpen={isPaymentModalOpen}
  onClose={() => setIsPaymentModalOpen(false)}
  totalAmount={calculateInvoiceTotal()} // Asegúrate de calcular el total correctamente
  selectedProducts={selectedProducts} // Pasa la lista de selectedProducts
/>

    </div>
  );
}