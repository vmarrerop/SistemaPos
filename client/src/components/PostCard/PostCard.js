import './PostCard.scss';

export function PostCard({ post, onEdit}) {
  return (
    <div className="Container" onClick={() => onEdit(post)}>
      <div className="Container2 flex justify-center items-center">
        {post.image && <img className="Image" src={post.image.url} alt={post.title} />}
      </div>
      <div className="">
        <p className="Titulo text-black">{post.title}</p>
        <h3 className="Precio text-black">${post.precio}</h3>
        {/*<p className="Description">{post.unidad}</p>*/}
      </div>
    </div>
  );
}