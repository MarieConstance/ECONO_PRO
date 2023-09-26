import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/login';
import PageAccueil from './Components/PageAccueil';
import Register from './Components/Register';
import Dashbord from './Components/Dashbord/tableaubord';
import SaisirDepense from './Components/Dashbord/SaisirDepense';
import Budget from './Components/Dashbord/Budget';
import Alerte from './Components/Dashbord/Alerte';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import {useRef} from 'react';


function App() {
  let clients = new QueryClient()
  return (
    <>
     <Router >
      <Suspense fallback={<div className='chargement'>Loading</div>}>
      <QueryClientProvider client={clients}>
        <Routes>
          <Route path='/' element = {<PageAccueil/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/Tableaubord' element = {<Dashbord/>}/>
          <Route path='/SaisirDepense' element = {<SaisirDepense/>}/>
          <Route path='/Budget' element = {<Budget/>}/>
          <Route path='/Alerte' element ={<Alerte/>}/>
        </Routes>
        </QueryClientProvider>
      </Suspense>
    </Router>
    </>
    
      
   
   
  ) 
  
}
export default App;
