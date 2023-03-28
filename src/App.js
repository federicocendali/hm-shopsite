import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='*' element={ <Navigate to={"/"}/> }/>
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;