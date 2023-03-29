import { Link } from 'react-router-dom';

export const Item = ( {item} ) => {
    return (
        <div className="col-3 m-2">
            <Link to={`/detail/${item.id}`}><h2>{item.name}</h2></Link>
            <img src={item.img} alt={item.name}/>
            <p><small>Categoría: {item.category}</small></p>
            <p>Precio: ${item.price}</p>
            {item.stock <= 5 && <p><strong>Quedan sólo {item.stock} unidades</strong></p>}
            <Link to={`/detail/${item.id}`} className="btn btn-outline-primary">Ver más</Link>
        </div>
    )
}