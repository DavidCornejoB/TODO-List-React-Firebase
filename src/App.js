import './App.css';
import logo from './Images/react.png'

import ListaTareas from './Components/ListaTareas';

function App() {

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} alt="imagen logo" className='logo' />
      </div>

      <div className='lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
