import './App.css';
import HomeScreen from './pages/Home/HomeScreen';
import { Route, Routes } from 'react-router-dom';

// Importación Páginas
import Inicio from './pages/InicioPage';
import Orientados from './pages/OrientadosPage';
import Eventos from './pages/EventPage';
import AdminPage from './pages/AdminPage';
import LogIn from './pages/Login/LogInScreen';
import {Error} from './pages/Home/components/error/Error'

// Fin Importación Páginas

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/orientados' element={<Orientados />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
