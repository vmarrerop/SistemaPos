import toast from "react-hot-toast";
import { usePosts } from "../../context/postContext";
import { BsFillTrashFill, BsFillCartCheckFill } from 'react-icons/bs';
import { CgDanger } from 'react-icons/cg';
import './Lista.scss';

export function ListaInventario({ post, onEdit}) {
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

  const productQuantity = post.cantidad || 0;
  const isLowQuantity = productQuantity <= 3;

  return (
    <tr>
      <td>{post.title}</td>
      <td>${post.precio}</td>
      <td>{post.description}</td>
      <td>{post.unidad}</td>
      <td style={{ color: isLowQuantity ? 'red' : 'black' }}>{post.cantidad}</td>
      <td> {isLowQuantity ? <CgDanger className="alarma" /> : <BsFillCartCheckFill className="bien" />} </td>
      <td>
        <button
          className="DeleteButton"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(post._id);
          }}
        >
          <BsFillTrashFill className="DeleteIcon" />
        </button>
      </td>
    </tr>
  );
}