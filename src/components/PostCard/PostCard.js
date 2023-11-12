import './PostCard.scss';
import { IoIosWarning } from 'react-icons/io'

export function PostCard({ post, onEdit }) {
  const showCuidadoIcon = post.cantidad <= 3;

  return (
    <div className="Container" onClick={() => onEdit(post)}>
      <div className="Container2 flex justify-center items-center">
        {post.image && (
          <img className="Image" src={post.image.url} alt={post.title} />
        )}
      </div>
      <div>
        <p className="Titulo text-black">{post.title}</p>
        <h3 className="Precio text-black">${post.precio}</h3>
        {showCuidadoIcon && <IoIosWarning className="cuidado" alt="cuidado" />}
      </div>
    </div>
  );
  
}