import React from 'react';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../../context/postContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './Modal.scss';

export function ModalComponent({ isOpen, onRequestClose, selectedProduct }) {
    const { createPost, updatePost } = usePosts();
    const navigate = useNavigate();
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Ejemplo de Modal"
        className="modal-overlay"
      >
        <div className='ContainerModal'>
        <div className="flex items-center justify-center">
          <div className="">
            <header className="flex justify-between items-center py-4 font-bold">
              <h3 className="text-xl titulo overline">
                {selectedProduct ? 'Editar producto' : 'Nuevo producto'}
              </h3>
              <button onClick={onRequestClose} className="text-atras">
                X
              </button>
            </header>
            <Formik
              initialValues={{
                title: selectedProduct ? selectedProduct.title : '',
                description: selectedProduct ? selectedProduct.description : '',
                image: '',
                precio: '',
                unidad: '',
                cantidad: '',
              }}
              enableReinitialize
              validationSchema={Yup.object({
                title: Yup.string().required('Titulo es requerido'),
                unidad: Yup.string().required('Unidad es requerida'),
                precio: Yup.string().required('Precio es requerido'),
              })}
              onSubmit={async (values, actions) => {
                if (selectedProduct) {
                  await updatePost(selectedProduct._id, values);
                } else {
                  await createPost(values);
                }
                actions.resetForm();
                actions.setSubmitting(false);
                onRequestClose();
                navigate('/services');
              }}
            >
              {({ setFieldValue, isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label htmlFor="title" className="Titulo">
                    Nombre del producto
                  </label>
                  <Field className="Input" placeholder="Nombre del producto" name="title" />
  
                  <ErrorMessage component="p" name="title" className="text-error" />

                  <label htmlFor="precio" className="Titulo">
                    Precio
                  </label>
                  <Field className="Input" placeholder="Precio del producto" name="precio" />
  
                  <ErrorMessage component="p" name="precio" className="text-error" />

                  <label htmlFor="unidad" className="Titulo">
                    Unidad
                  </label>
                  <Field as="select" name="unidad" className="Input">
                    <option value="Seleccion">Seleccionar...</option>
                    <option value="Unidad">Unidad</option>
                    <option value="Litro">Litro</option>
                    <option value="Kilogramo">Kilogramo</option>
                    {/* Agrega más opciones según sea necesario */}
                  </Field>
                  <ErrorMessage component="p" name="unidad" className="text-error" />

                  <label htmlFor="cantidad" className="Titulo">
                    Cantidad
                  </label>
                  <Field className="Input" placeholder="Cantidad en inventario" name="cantidad" />
  
                  <ErrorMessage component="p" name="cantidad" className="text-error" />
  
                  <label htmlFor="description" className="Titulo">
                    Descripción
                  </label>
                  <Field
                    component="Input"
                    name="description"
                    id="description"
                    placeholder="Descripcion del producto"
                    rows="3"
                    className="Input"
                  />
                  <ErrorMessage component="p" name="description" className="text-error" />
  
                  <label htmlFor="image" className="Titulo">
                    Imagen
                  </label>
                  <input
                    type="file"
                    name="image"
                    className="Input"
                    onChange={(e) => setFieldValue('image', e.target.files[0])}
                  />
                  <ErrorMessage component="p" name="image" className="text-red-400 text-sm" />
  
                  <button type="submit" className="guardar" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                    ) : (
                      'Guardar'
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        </div>
      </Modal>
    );
  }