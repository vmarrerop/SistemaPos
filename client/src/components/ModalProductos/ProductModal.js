import Modal from 'react-modal';

import { usePosts } from "../../context/postContext";
import { PostCard } from "../../components/PostCard/PostCard";
import { AiFillCloseCircle } from 'react-icons/ai'
import React, { useState } from 'react';

Modal.setAppElement('#root');

export function ProductModal({ isOpen, onRequestClose }) {

    const { posts } = usePosts();
  const [selectedProducts, setSelectedProducts] = useState([]);
      
      const handleEditProductInModal = (product) => {
        const isSelected = selectedProducts.some((selectedProduct) => selectedProduct._id === product._id);
      
        if (isSelected) {
          setSelectedProducts(selectedProducts.filter((selectedProduct) => selectedProduct._id !== product._id));
        } else {
          const updatedProduct = { ...product, quantity: 1 };
          setSelectedProducts([...selectedProducts, updatedProduct]);
        }
      };
      
      const renderPost = () => {
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
                    onEdit={() => handleEditProductInModal(post)}
                    isSelected={selectedProducts.some((selectedProduct) => selectedProduct._id === post._id)}
                  />
                ))}
              </div>
            ))}
          </div>
        );
      };
      

      return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          className="Modal"
        >
          <button
            className="closebutton"
            onClick={onRequestClose}
          >
            <AiFillCloseCircle />
          </button>
          <div className='modal-content'>
            <div className="modal-header">
              <h1 className="font-bold tituloModal text-2xl overline">Productos</h1>
            </div>
            <div className="modal-body">
              {renderPost()}
            </div>
          </div>
        </Modal>
      );
      
  }