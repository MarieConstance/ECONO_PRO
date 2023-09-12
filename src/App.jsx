import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import PageAccueil from './Components/PageAccueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router >
      <Suspense fallback={<div className='chargement'>Loading</div>}>
        <Routes>
          <Route path='/' element = {<PageAccueil/>}/>
        </Routes>
      </Suspense>
    </Router>
  ) 
  
}
export default App;
