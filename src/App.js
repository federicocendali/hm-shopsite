import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

import { PokeApi } from './ejemplos/PokeApi';
import { PokeLista } from './ejemplos/PokeLista';

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer /> */}
      {/* <PokeApi /> */}
      <PokeLista />
    </div>
  );
}

export default App;