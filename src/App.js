import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { PokeApi } from './ejemplos/PokeApi';
import { PokeLista } from './ejemplos/PokeLista';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
        <Route path='/pokeapi' element={ <PokeApi /> }/>
        <Route path='/pokelista' element={ <PokeLista /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;