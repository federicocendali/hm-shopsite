import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { Clicker } from './ejemplos/Clicker';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />
      {/* <ItemListContainer greeting={"Hola Mundo!"}/> */}

      <button onClick={handleShow} className="btn btn-secondary">Show</button>

      { show
        ? <Clicker />
        : null
      }
    </div>
  );
}

export default App;