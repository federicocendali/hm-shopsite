import { useState } from 'react';

export const ItemCount = ({max, cantidad, saludar}) => {

    const handleRestar = () => {
        // cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        // cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className='mx-3'>{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <br/>
            <button onClick={saludar} className="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}