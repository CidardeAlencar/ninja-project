import './App.css';
import {Header} from './components/Header.jsx';
import Imagen from './imagen/Imagen.jsx'
import { Fuerza } from './components/Fuerzas.jsx';
import { Lomasvisto } from './components/Lomasvisto';

function App() {
  return (
    <><Header/>
    <Imagen/> 
    <Fuerza/>
    <Lomasvisto/> </>
  );
}

export default App;

