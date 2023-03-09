import { Tutores } from './components/Tutores'
import { Noticias } from './components/Noticias'
import { Tutor } from './components/Tutor'
import './App.css'
import { ContenedorTurquesa } from './components/ContenedorTurquesa';
import { Boton } from './components/Boton'

function App() {

  return (
    <div>
      <hr/>
      <h2>Coder 51155</h2>

      <Noticias>
        <h4>Noticias</h4>
      </Noticias>

      <Tutores />

      <ContenedorTurquesa>
        <h2>Titulo</h2>
        <p>Blablabla asd asd</p>
        <small>Un texto chiquito</small>
        <section>
          <h4>Otro titulo mas chiquito</h4>
          <p>Otro texto</p>
        </section>
      </ContenedorTurquesa>

      <Boton>
        Click me
      </Boton>

{/*       <Tutor
        nombre="Fede Blautzik"
        curso="React JS"
        comision={51155}
        edad={28}
      />
      <Tutor
        nombre="Julian Debranbandere"
        curso="JavaScript"
        comision={42355}
        edad={19}
      /> */}
    </div>
  );
}

export default App;