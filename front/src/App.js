import './App.css';
import HomeScreen from './pages/Home/HomeScreen';
import { Route, Routes } from 'react-router-dom';

// Importación Páginas
import Inicio from './pages/InicioPage';
import Orientados from './pages/OrientadosPage';
import Eventos from './pages/EventPage';

// Fin Importación Páginas

function App() {
  return (
    <div className="App">


      <Routes>
      <Route path='/' element={<HomeScreen />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/orientados' element={<Orientados />} />
        <Route path='/eventos' element={<Eventos />} />
      </Routes>

    </div>
  );
}

export default App;
