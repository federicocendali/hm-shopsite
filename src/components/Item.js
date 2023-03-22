import { Link } from 'react-router-dom';

export const Item = ( {item} ) => {
    return (
        <div className="col-3 m-2">
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p><small>Categoría: {item.category}</small></p>
            <Link to={`/detail/${item.id}`} className="btn btn-outline-primary">Ver más</Link>
        </div>
    )
}