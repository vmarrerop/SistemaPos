import './PostInventario.scss';
import { usePosts } from "../../context/postContext";
import { IoIosWarning } from 'react-icons/io'
import toast from "react-hot-toast";
import { BsFillTrashFill } from 'react-icons/bs';

export function PostInventario({ post, onEdit }) {
  const showCuidadoIcon = post.cantidad <= 3;
  const { deletePost} = usePosts();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Seguro quiere eliminar <strong>{post.title}</strong>?
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={(e) => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Eliminar
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      {
        duration: "4000",
        style: {
          background: "#202020"
        }
      }
    );
  };

  return (
    <div className="Container" onClick={() => onEdit(post)}>
      <div className=" izquierda w-2/5 flex justify-center items-center">
        {post.image && (
          <img className="Image" src={post.image.url} alt={post.title} />
        )}
      </div>
      <div className=' derecha w-3/5'>
        <p className="Titulo text-black">{post.title}</p>
        <h3 className="Precio text-black">${post.precio}</h3>
        <h3 className="Precio text-black"><span className='Precio2'>Cantidad: </span>{post.cantidad}</h3>
        <h3 className="Precio2 text-black">{post.description}</h3>
        {showCuidadoIcon && <IoIosWarning className="cuidado" alt="cuidado" />}
      </div>

      <button
          className="DeleteButton"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(post._id);
          }}
        >
          <BsFillTrashFill className="DeleteIcon" />
        </button>

    </div>

    
  );
}