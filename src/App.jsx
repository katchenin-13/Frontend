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
import GestionEntite from './pages/Manager/entites/GestionEntite';
import GestionBeneficiaire from './pages/Manager/beneficiaires/GestionBeneficiaire';


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
import { BeneficiaireProvider } from './contexts/BeneficiaireContext.jsx';
import GestionMembre from './pages/Manager/membres/GestionMembre.jsx';
import EditMembre from './pages/Manager/membres/EditMembre.jsx';
import { MembreProvider } from './contexts/MembreContext.jsx';
import AddMembre from './pages/Manager/membres/AddMembre.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import SignUpForm from './pages/admin/login/SignUpForm.jsx';
import SignInForm from './pages/admin/login/SignInForm.jsx';
import NewPasswordForm from './pages/admin/login/NewPasswordForm.jsx';
import ResetPasswordForm from './pages/admin/login/ResetPasswordForm.jsx';
import AddEntite from './pages/Manager/entites/AddEntite.jsx';
import EditEntite from './pages/Manager/entites/EditEntite.jsx';
import { EntiteProvider } from './contexts/EntiteContext.jsx';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
  <AuthProvider>
    <Routes>
      <Route exact path="/" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/reset-password" element={<ResetPasswordForm />} />
      <Route path="/new-password" element={<NewPasswordForm />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route path="/admin-dashboard/typeentite" element={<Typeentite />}></Route>
      <Route path="/admin-dashboard/typeactivite" element={<Typeactivite />}></Route>
      <Route path="/admin-dashboard/typebeneficiaire" element={<Typebeneficiaire />}></Route>
      <Route path="/admin-dashboard/GestionEntite" element={<GestionEntite />}></Route>
      <Route path="/admin-dashboard/AddEntite" element={<EntiteProvider> <AddEntite /> </EntiteProvider>}></Route>
       <Route path="/admin-dashboard/EditEntite" element={<EntiteProvider> <EditEntite /> </EntiteProvider>}></Route>

      <Route path="/manager-dashboard" element={<Dashboard1 />} />
      <Route path="/manager-dashboard/GestionActivite" element={<GestionActivite />}></Route>
      <Route path="/manager-dashboard/AddActivite" element={<AddActivite />}></Route>
      {/* <Route path="/manager-dashboard/EditActivite" element={<AddActivite />}></Route> */}
      <Route path="/manager-dashboard/Gestionbeneficiaire" element={<GestionBeneficiaire />}></Route>

      <Route path="/manager-dashboard/AddBeneficiaire" element={<BeneficiaireProvider><AddBeneficiaire /></BeneficiaireProvider>}></Route>
      <Route path="/manager-dashboard/EditBeneficiaire" element={<BeneficiaireProvider><EditBeneficiaire /></BeneficiaireProvider>}></Route>

      <Route path="/manager-dashboard/GestionContact" element={<GestionContact/>}></Route>
      <Route path="/manager-dashboard/AddContact" element={<ContactProvider><AddContact /></ContactProvider>}></Route>
      <Route path="/manager-dashboard/EditContact" element={<ContactProvider><EditContact /></ContactProvider>}></Route>

      <Route path="/manager-dashboard/GestionMembre" element={<GestionMembre />}></Route>
      <Route path="/manager-dashboard/AddMembre" element={<MembreProvider><AddMembre /></MembreProvider>}></Route>
      <Route path="/manager-dashboard/EditMembre" element={<MembreProvider><EditMembre /></MembreProvider>}></Route>


      <Route path="/manager-dashboard/Agenda" element={<GestionAgenda />}></Route>


    </Routes>
</AuthProvider>
  );
}

export default App;
