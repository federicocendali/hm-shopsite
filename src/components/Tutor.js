export const Tutor = ( {nombre, curso, comision, edad} ) => { // Nivel 3
    // console.log(props) // Nivel 1
    // const { nombre, curso, comision, edad } = props // Nivel 2

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Curso: {curso}</p>
            <p>Comision: {comision}</p>
            <p>Edad: {edad}</p>
        </div>
    )
}