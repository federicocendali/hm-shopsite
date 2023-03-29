export const ItemCount = ({max, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button onClick={handleRestar} className={`btn ${cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"}`}>-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className={`btn ${cantidad === max ? "btn-outline-danger" : "btn-primary"}`}>+</button>
            <br/>
            <button onClick={agregar} className="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}