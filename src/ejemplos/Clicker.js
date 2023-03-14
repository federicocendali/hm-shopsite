import { useState, useEffect } from "react"

export const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState("Hola mundo!")

    const sumarClick = () => {
        setCounter( counter + 1 )
    }

    const restarClick = () => {
        setCounter( counter - 1 )
    }

    const handleSaludo = () => {
        if (saludo === "Hola mundo!") {
            setSaludo("Chau mundo!")
        } else {
            setSaludo("Hola mundo!")
        }
    }

    useEffect(() => {
        console.log("MONTAJE")

        return () => {
            console.log("DESMONTAJE")
        }
    }, [])

    useEffect(() => {
        console.log("Efecto de actualizacion counter")
        // localStorage.setItem('counter', counter)

        // if (counter % 10 === 0) {
        //     console.log("MULTIPLO")
        // }

        return () => {
            console.log("Efecto desmontaje counter")
        }
    }, [counter])

    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>
            <p>Clicks: {counter}</p>
            <p>Fecha y Hora: { new Date().toLocaleString() }</p>
            <button onClick={sumarClick} className="btn btn-primary">Sumar</button>
            <button onClick={restarClick} className="btn btn-primary">Restar</button>
            <hr/>
            <p>{saludo}</p>
            <button onClick={handleSaludo} className="btn btn-primary">Cambiar saludo</button>
        </div>
    )
}