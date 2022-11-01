import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomeScreen from './pages/Home/HomeScreen';
import Assign from './pages/Assign/Assign';
import Modify from './pages/modify/Modify';
import Orientados from './pages/StudentsScreen/StudentsScreen';
import AdminPage from './pages/adminHome/AdminPage';
import { Error } from './pages/Home/components/error/Error'
import ProfileAdminScreen from './pages/profileAdmin/ProfileAdminScreen';
import { EventScreen } from './pages/eventPage/EventScreen';
import FormOrientado from './pages/StudentsScreen/componentes-nuevoOrientado/FormOrientado';
import NewUsers from './pages/StudentsScreen/components/NewUsers';
import StudentInfo from './pages/StudentsScreen/componentes-nuevoOrientado/StudentInfo';
import PrivateRoutes from './privateRoute/PrivateRoutes';
import { EventForm } from './pages/eventPage/EventForm';
import LogInRoute from './privateRoute/LoginRoute';

function App() {

  return (
    <Routes>
      {/*  rutas publicas */}
      <Route path='/' element={<HomeScreen />} />
      <Route path='/logIn' element={<LogInRoute />} />
      <Route path='*' element={<Error />} />

      {/*  rutas privadas */}
      <Route element={<PrivateRoutes />}>
        <Route path='inicio' element={<AdminPage />} />
        <Route path='profile' element={<ProfileAdminScreen />} />

        <Route path='orientados/*' element={<Orientados />} >
          <Route path="nuevo" element={<FormOrientado />} />
          <Route path="newUsers" element={<NewUsers />} />
          <Route path="StudentInfo/:id" element={<StudentInfo />} />
        </Route>

        <Route path='orientados/:id' element={<Assign />} />
        <Route path='modificar/:id' element={<Modify />} />
        <Route path='eventos' element={<EventScreen />} />
        <Route path='eventos/form' element={<EventForm />} />

      </Route>
    </Routes>
  );
}
export default App;