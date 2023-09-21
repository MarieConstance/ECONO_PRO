import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/login';
import PageAccueil from './Components/PageAccueil';
import Register from './Components/register';
import Tableaubord from './Components/Dashbord/Tableaubord'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router >
      <Suspense fallback={<div className='chargement'>Loading</div>}>
        <Routes>
          <Route path='/' element = {<PageAccueil/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/Tableaubord' element = {<Tableaubord/>}/>
        </Routes>
      </Suspense>
    </Router>
  ) 
  
}
export default App;
