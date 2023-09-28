import React, { Suspense } from 'react';
import Login from '../src/Components/Login';
import PageAccueil from '../src/Components/PageAccueil';
import Register from '../src/Components/Register';
import Dashbord from '../src/Components/Dashbord/Tableaubord';
import SaisirDepense from '../src/Components/Dashbord/SaisirDepense';
import Budget from '../src/Components/Dashbord/Budget';
import Alerte from '../src/Components/Dashbord/Alerte';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import Footer from '../src/Components/Footer';
import Topbar from '../src/Components/Dashbord/Topbar';
import SideBar from './Components/Dashbord/Sidebar';


function App() {
  let clients = new QueryClient()
  return (
    <>
      <Router >
        <Suspense fallback={<div className='chargement'>Loading</div>}>
          <QueryClientProvider client={clients}>
            <Routes>
              <Route path='/' element={<PageAccueil />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Tableaubord' element={<Dashbord />} />
              <Route path='/SaisirDepense' element={<SaisirDepense />} />
              <Route path='/Budget' element={<Budget />} />
              <Route path='/Alerte' element={<Alerte />} />
              <Route path='/Footer' element={<Footer />} />
              <Route path='/Topbar' element={<Topbar />} />
              <Route path='/Sidebar' element ={<SideBar/>}/>
            </Routes>
          </QueryClientProvider>
        </Suspense>
      </Router>
    </>


  )

}
export default App;
