import { useEffect, useState } from 'react';
import { PokeCard } from './PokeCard';

export const PokeLista = () => {
    const [lista, setLista] = useState([])
    const [pagination, setPagination] = useState({})
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json() )
            .then((data) => {
                setLista(data.results)
                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [url])

    const handleSiguiente = () => {
        pagination.next && setUrl( pagination.next )
    }

    const handleAnterior = () => {
        pagination.previous && setUrl( pagination.previous )
    }

    return (
        <div className="cointainer my-5">
            <h2>Poke lista</h2>
            <hr/>
            <button onClick={handleAnterior} className="btn btn-outline-primary">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-2">Siguiente</button>
            <hr/>

            <div className="row">
                {
                    lista.map((pokemon) => <PokeCard key={pokemon.name} url={pokemon.url}/>)
                }
            </div>
        </div>
    )
}