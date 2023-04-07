import { useContext, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Registro</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-control my-2"
                        placeholder='Email'
                    />
                    <input 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form-control my-2"
                        placeholder='Contraseña'
                    />
                    <button className='btn btn-primary' type='submit'>Registrarme</button>
                    <Link className='btn btn-outline-primary' to={"/login"}>Ya estoy registrado</Link>
                </form>
            </div>
        </div>
    )
}