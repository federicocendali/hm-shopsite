export const Item = ( {item} ) => {
    return (
        <div className="col-3 m-2">
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <button className="btn btn-outline-primary">Ver más</button>
        </div>
    )
}