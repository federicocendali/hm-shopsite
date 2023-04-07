import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/LoginScreen';
import { RegisterScreen } from '../components/RegisterScreen';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={ <LoginScreen /> }/>
            <Route path='/register' element={ <RegisterScreen /> }/>
            <Route path='*' element={ <Navigate to={"/login"}/> }/>
        </Routes>
    )
}