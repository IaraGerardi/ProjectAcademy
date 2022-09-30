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
import { EventForm } from './pages/eventPage/EventForm';
/* import { ProbandoReducer } from './context/Reducer'; */


// Fin Importación Páginas
function App() {
  let auten = true;
  return (

 
    <Routes>
      {/*  rutas publicas */}
      <Route path='/' element={<HomeScreen />} />
      <Route path='/logIn' element={<LogIn />} />
      <Route path='*' element={<Error />} />
      {/* <Route path='/reducer' element={<ProbandoReducer />} /> */}
      {/*  rutas privadas */}

      <Route element={<PrivateRoutes  />}>
          <Route path='inicio' element={<AdminPage />} />
          <Route path='profile' element={<ProfileAdminScreen />} />

              <Route path='orientados/*' element={<Orientados />} >
                <Route path="nuevo" element={<FormOrientado />} />
                <Route path="newUsers" element={<NewUsers />} />
                <Route path="StudentInfo/:id" element={<StudentInfo />} />
              </Route>
          <Route path='orientados/:id' element={<Assign />} />
      
          <Route path='eventos' element={<EventScreen />} />
          <Route path='eventos/form' element={<EventForm />} />

      </Route>

      

    </Routes>
  
    
  );
}
export default App;