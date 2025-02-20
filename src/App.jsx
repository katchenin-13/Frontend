import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/admin/Dashboard';
import Typeentite from './pages/admin/typeentite';
import Typeactivite from './pages/admin/Typeactivite';
import Typebeneficiaire from './pages/admin/Typebeneficiaire';
import GestionEntite from './pages/admin/GestionEntite';
import GestionBeneficiaire from './pages/Manager/beneficiaires/GestionBeneficiaire';

import SignUpContainer from './containers/SignUpContainer';
import SignInContainer from "./containers/SignInContainer";
import NewPasswordContainer from './containers/NewPasswordContainer';
import ResetPasswordContainer from './containers/ResetPasswordContainer';
import Dashboard1 from './pages/Manager/Dashboard1';
import GestionActivite from './pages/Manager/activites/GestionActivite';
import AddActivite from './pages/Manager/activites/AddActivite';
import AddBeneficiaire from './pages/Manager/beneficiaires/AddBeneficiaire';
import EditBeneficiaire from './pages/Manager/beneficiaires/EditBeneficiaire';
import GestionContact from './pages/Manager/contact/GestionContact';
import AddContact from './pages/Manager/contact/AddContact';
import EditContact from './pages/Manager/contact/EditContact';
import GestionAgenda from './pages/Manager/agendas/gestionAgenda.js';
import { ContactProvider } from './contexts/contactContext.jsx';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (

    <Routes>
      <Route exact path="/" element={<SignInContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
      <Route path="/reset-password" element={<ResetPasswordContainer />} />
      <Route path="/new-password" element={<NewPasswordContainer />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route path="/admin-dashboard/typeentite" element={<Typeentite />}></Route>
      <Route path="/admin-dashboard/typeactivite" element={<Typeactivite />}></Route>
      <Route path="/admin-dashboard/typebeneficiaire" element={<Typebeneficiaire />}></Route>
      <Route path="/admin-dashboard/GestionEntite" element={<GestionEntite />}></Route>

      <Route path="/manager-dashboard" element={<Dashboard1 />} />
      <Route path="/manager-dashboard/GestionActivite" element={<GestionActivite />}></Route>
      <Route path="/manager-dashboard/AddActivite" element={<AddActivite />}></Route>
      {/* <Route path="/manager-dashboard/EditActivite" element={<AddActivite />}></Route> */}
      <Route path="/manager-dashboard/Gestionbeneficiaire" element={<GestionBeneficiaire />}></Route>

      <Route path="/manager-dashboard/AddBeneficiaire" element={<AddBeneficiaire />}></Route>
      <Route path="/manager-dashboard/EditBeneficiaire" element={<EditBeneficiaire />}></Route>

      <Route path="/manager-dashboard/GestionContact" element={<GestionContact/>}></Route>
      <Route path="/manager-dashboard/AddContact" element={<ContactProvider><AddContact /></ContactProvider>}></Route>
      <Route path="/manager-dashboard/EditContact" element={<ContactProvider><EditContact /></ContactProvider>}></Route>


      <Route path="/manager-dashboard/Agenda" element={<GestionAgenda />}></Route>


    </Routes>

  );
}

export default App;
