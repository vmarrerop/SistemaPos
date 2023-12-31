import { usePosts } from "../../context/postContext";
import './Inventario.scss';
import '../../App.scss'
import { PostInventario } from "../../components/PostInventario/PostInventario";
import React, { useState } from 'react';
import { ModalComponent } from "../../components/Modal/ModalCreateItem";
import { Header } from "../../components/Header/Header";
//import { ListaInventario } from "../../components/ListaInventario/ListaInventario";

export function Inventario() {
  const { posts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [setSelectedProduct] = useState(null);
  const [selectedColor] = useState('');

  const renderPost1 = () => {
    if (posts.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          {/* ... */}
        </div>
      );
    }
  
    const productsPerRow = 1; // Número de productos por fila
    const groupedProducts = [];
    for (let i = 0; i < posts.length; i += productsPerRow) {
      groupedProducts.push(posts.slice(i, i + productsPerRow));
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {groupedProducts.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((post) => (
              <PostInventario
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  const handleEditProduct = (product) => {
    const isSelected = selectedProducts.some((selectedProduct) => selectedProduct._id === product._id);
  
    if (isSelected) {
      // Si ya está seleccionado, deselecciónalo
      setSelectedProducts(selectedProducts.filter((selectedProduct) => selectedProduct._id !== product._id));
      setSelectedProduct(null); // Desselecciona el producto
    } else {
      // Si no está seleccionado, agrégalo a la lista de seleccionados con cantidad 1
      const updatedProduct = { ...product, quantity: 1 };
      setSelectedProducts([...selectedProducts, updatedProduct]);
      setSelectedProduct(updatedProduct); // Establece el producto seleccionado
    }
  };

  const totalValue = posts.reduce((acc, post) => acc + parseFloat(post.precio || 0), 0);
  const totalProducts = posts.length;
  const totalUnits = posts.reduce((acc, post) => acc + parseFloat(post.cantidad || 0), 0);


  return (
<div className="main mt-9">
  <Header />

  <div className={`main-content ${selectedColor}`}></div>
  <div className="w-full flex justify-center"> {/* Centra el contenido */}
    <div className="w-full sm:w-2/3 side left">
      <header className={`main-content ${selectedColor} flex justify-between items-center my-4 background-main`}>
        <h1 className="font-bold titulo text-2xl ml-5">
          Productos ({posts.length})
        </h1>

        <button onClick={openModal} className="boton-crear mr-5">
          Nuevo
        </button>
        
      </header>  
      <div className="Productos-Inventario2">
      {renderPost1()}
      </div>
      
      <div className={`main-content ${selectedColor}`}>
      {/*
        <table className="ProductTable">
          <thead>
            <tr>
              <th className="TableHeader">Titulo</th>
              <th className="TableHeader">Precio</th>
              <th className="TableHeader">Descripción</th>
              <th className="TableHeader">Unidad</th>
              <th className="TableHeader">Cantidad</th>
              <th className="TableHeader">Alerta</th>
              <th className="TableHeader">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <ListaInventario
                key={post._id}
                post={post}
                onEdit={() => handleEditProduct(post)}
                isSelected={selectedProducts.some((selectedProduct) => selectedProduct._id === post._id)}
              />
            ))}
          </tbody>
        </table>
        */}
        <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      </div>

      <div className="centro0">
        
        <div className='seccion-izquierda flex flex-col justify-center items-center'>
          <p className='message'>INFORMACIÓN</p>
        </div>
        <div className='derecha  flex flex-col justify-center items-center'>
        <p className="total">Número total de productos: <span>{totalProducts}</span></p>
        <p className="total">Cantidad total de unidades: <span>{totalUnits}</span></p>
        <p className="total">Valor total del inventario: <span>${totalValue.toFixed(2)}</span></p>
        </div>
      </div>


    </div>
  </div>
</div>

  );
}
