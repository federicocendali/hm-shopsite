import { Button } from 'react-bootstrap'

export const ItemListContainer = ( {greeting} ) => {
    return (
        <div className="list-container">
            <h2 className="list-container__title">ItemListContainer</h2>
            <hr/>
            <p>{greeting}</p>
            <Button variant='secondary' size='sm'>Ver Talles</Button>
            <Button variant='primary'>Agregar al carrito</Button>
        </div>
    )
}