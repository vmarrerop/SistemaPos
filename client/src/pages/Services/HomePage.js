import { usePosts } from "../../context/postContext";
import { PostCard } from "../../components/PostCard/PostCard";
import './Service.scss';
import '../../App.scss'
import React, { useState } from 'react';
import { ModalComponent } from "../../components/Modal/ModalCreateItem";
import { AiOutlineMinusCircle, AiOutlineAppstoreAdd, AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { CiGrid41 } from 'react-icons/ci'
import { Header } from "../../components/Header/Header";
import { PaymentModal } from "../../components/MetodoDePago/PaymentModal";

export function HomePage() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedColor] = useState('');
  const [isQuantityExceeded, setIsQuantityExceeded] = useState(false); // Nuevo estado
  const [showQuantityWarning, setShowQuantityWarning] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  let [l, setSelectedProduct] = useState('');


  l = null;
  const handleEditProduct = (product) => {
    const isSelected = selectedProducts.some((selectedProduct) => selectedProduct._id === product._id);
  
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((selectedProduct) => selectedProduct._id !== product._id));
      setSelectedProduct(null);
      setIsProductModalOpen(false); // Cerrar el modal cuando se deseleccione un producto
    } else {
      // Verifica si la cantidad de producto es 0 o vacía
      if (product.cantidad === 0 + l || !product.cantidad) {
        // Muestra el modal de advertencia
        setShowQuantityWarning(true);
      } else {
        const updatedProduct = { ...product, quantity: 1 };
        setSelectedProducts([...selectedProducts, updatedProduct]);
        setSelectedProduct(updatedProduct);
        setIsProductModalOpen(false); // Cerrar el modal cuando se seleccione un producto
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

  const closeModalProduct = () => {
    setIsProductModalOpen(false);
  };

  const renderPost = () => {
    if (posts.length === 0)
      return (
        <div className="flex flex-col justify-center items-center">
          {/* ... */}
        </div>
      );
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
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

  const renderPost1 = () => {
    if (posts.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          {/* ... */}
        </div>
      );
    }
  
    const productsPerRow = 2; // Número de productos por fila
    const groupedProducts = [];
    for (let i = 0; i < posts.length; i += productsPerRow) {
      groupedProducts.push(posts.slice(i, i + productsPerRow));
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {groupedProducts.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                onEdit={() => handleEditProduct(post)}
                isSelected={selectedProducts.some((selectedProduct) => selectedProduct._id === post._id)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="main">
      <Header/>
      <div className={`main-content ${selectedColor}`}></div>
      <div className="w-full flex flex-col md:flex-row">


      <div className="w-full md:w-2/3 side left hidden md:block">
  <header className={`main-content ${selectedColor} flex justify-between items-center my-4 background-main`}>
    <h1 className="font-bold titulo text-2xl ml-5 hidden">
      Productos ({posts.length})
    </h1>
  </header>
  <div className={`main-content ${selectedColor} Productos background-main`}>
    {/* Contenido de la sección de productos */}
    {renderPost()}
    <ModalComponent
      isOpen={isModalOpen}
      onRequestClose={closeModal}
    />
  </div>
</div>



<div className="ml-9">
<h1 className="usuario">Bienvenida <span className="pos">PAULA</span></h1>
</div>
<div className="md:w-2/3 Factura md:w-90 md:m-9 px-4 md:px-5">
<div>
<div className="flex items-center container-titulo">
  <h1 className="font-bold titulo text-2xl overline mt-1">Factura de venta</h1>
  <div className="ml-9 adicionar md:hidden cursor-pointer text-center" onClick={() => setIsProductModalOpen(!isProductModalOpen)}>
    <AiOutlineAppstoreAdd className="mb-2 icon-agregar" />
  </div>
</div>


{isProductModalOpen && (
  <div className="Modal">
    <div className="closebutton" onClick={closeModalProduct}>
      <AiFillCloseCircle />
    </div>
    <div className="modal-contentt">
      <div className="modal-header">
        <h1 className="font-bold tituloModal text-2xl overline">Productos</h1>
      </div>
      <div className="modal-bodyy">
        <div className="card-container">
          {renderPost1()}
        </div>
      </div>
    </div>
  </div>
)}



    </div>
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
  {selectedProducts.length === 0 ? (
    <div className="no-product-selected">
      <CiGrid41 className="big-icon" />
      <p className="no-selected">Ningún producto seleccionado</p>
    </div>
  ) : (
    selectedProducts.map((product) => (
      <div key={product._id} className="informacion-producto">
        <div className="flex justify-between items-center">
          <div className="font-sm md:font-bold w-1/4">{product.title}</div>
          <div className="sumar ml-8 flex justify-center items-center w-1/3">
            <button onClick={() => handleDecrement(product)}>
              <AiOutlineMinusCircle className="text-white" />
            </button>
            <div className="mx-2 text-white">{getProductQuantity(product)}</div>
            <button onClick={() => handleIncrement(product)}>
              <AiOutlinePlusCircle className="text-white" />
            </button>
          </div>
          <div className="text-sm w-1/4 text-right">
            ${product.precio * getProductQuantity(product)}
          </div>
        </div>
      </div>
    ))
  )}
</div>

          <div className="seccion-vender">
            <div className="flex justify-between">
              <button
                className="flex w-full justify-between"
                onClick={() => setIsPaymentModalOpen(true)} 
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

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalAmount={calculateInvoiceTotal()} 
        selectedProducts={selectedProducts} 
      />
    </div>
  );
}