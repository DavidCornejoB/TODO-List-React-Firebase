import './App.css';
import logo from './Images/react.png'

import ListaTareas from './Components/ListaTareas';

import { useFirebaseApp } from 'reactfire';

function App() {

  const firebase = useFirebaseApp();
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' />
      </div>

      <div className='lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
