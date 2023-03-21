import { useEffect, useState } from 'react';

export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)
    console.log(id)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSiguente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                pokemon &&
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            }

            <button onClick={handleAnterior} className="btn btn-outline-primary">Anterior</button>
            <button onClick={handleSiguente} className="btn btn-primary mx-2">Siguiente</button>
        </div>
    )
}