import { useState } from 'react';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        console.log(newItem)
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>

            <ItemCount
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                agregar={handleAgregar}
            />
        </div>
    )
}