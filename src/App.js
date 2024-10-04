
import './App.css';
import Home from './pages/Home'
import { BrowserRouter,Outlet,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import Footeer from './components/Footeer';
import Event from './pages/Event';
import Pagenotfound from './pages/Pagenotfound';
import Servicedata from './components/data/Servicedata.js';
import Serviceparticular from './pages/Serviceparticular';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/><Outlet/><Footeer/></>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/event' element={<Event/>}/>
            {Servicedata.map((data)=>(
              
              <Route path={data.slugs} key={data.title} element={<Serviceparticular/>}/>
            ))}
            <Route path='*' element={<Pagenotfound/>}/>
            
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
