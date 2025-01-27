import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Typeentite from './pages/typeentite';
import Typeactivite from './pages/typeactivite';
import Typebeneficiaire from './pages/Typebeneficiaire';
import GestionEntite from './pages/GestionEntite';

function  App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path= "/pages/typeentite" element= {<Typeentite/>}></Route>
        <Route path="/pages/typeactivite" element={<Typeactivite/>}></Route>
        <Route path = "/pages/typebeneficiaire" element= {<Typebeneficiaire/>}></Route>  
        <Route path="/pages/GestionEntite" element={<GestionEntite />}></Route> 
      </Routes>
    </>
  );
}

export default App;
