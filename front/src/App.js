import './App.css';
import HomeScreen from './pages/Home/HomeScreen';
import { Route, Routes } from 'react-router-dom';
// Importación Páginas
// import Inicio from './pages/InicioPage';
import Assign from './pages/Assign/Assign';
import Orientados from './pages/StudentsScreen/StudentsScreen';
import AdminPage from './pages/adminHome/AdminPage';
import LogIn from './pages/Login/LogInScreen';
import { Error } from './pages/Home/components/error/Error'
import ProfileAdminScreen from './pages/ProfileAdmin/ProfileAdminScreen';
import { EventScreen } from './pages/eventPage/EventScreen';
import FormOrientado from './pages/StudentsScreen/componentes-nuevoOrientado/FormOrientado';
import NewUsers from './pages/StudentsScreen/components/NewUsers';
import StudentInfo from './pages/StudentsScreen/componentes-nuevoOrientado/StudentInfo';
import PrivateRoutes from './privateRoute/PrivateRoutes';



// Fin Importación Páginas
function App() {
  let auth = false;
  return (

    <Routes>
      {/*  rutas publicas */}
      <Route path='/' element={<HomeScreen />} />
      <Route path='/logIn' element={<LogIn />} />
      <Route path='*' element={<Error />} />

      {/*  rutas privadas */}

      <Route element={<PrivateRoutes propAuth={auth} />}>
          <Route path='inicio' element={<AdminPage />} />
          <Route path='profile' element={<ProfileAdminScreen />} />

              <Route path='orientados/*' element={<Orientados />} >
                <Route path="nuevo/:id" element={<FormOrientado />} />
                <Route path="newUsers" element={<NewUsers />} />
                <Route path="StudentInfo/:id" element={<StudentInfo />} />
              </Route>
          <Route path='orientados/:id' element={<Assign />} />
      
          <Route path='eventos' element={<EventScreen />} />

      </Route>

      

      {/*  version de ruta privada que funciona */}
      {/*  <Route path='/private-routes/*' element={ <PrivateRoutes propAuth={auth}/> }>
                  <Route path='holi1' element={<Probando/>}/>
           </Route> */}
    </Routes>
  );
}
export default App;