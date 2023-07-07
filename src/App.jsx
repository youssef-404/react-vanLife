import {BrowserRouter,Routes,Route} from  'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails';
import Layout from './component/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './component/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import Details from './pages/Host/vans/Details';
import Pricing from './pages/Host/vans/Pricing';
import Photos from './pages/Host/vans/Photos';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    
  <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetails />} />
            
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path='vans' element={<HostVans/>}/>
              <Route path='vans/:id' element={<HostVanDetails/>}>
                <Route index element={<Details/>} />
                <Route path='pricing' element={<Pricing/>} />
                <Route path='photos' element={<Photos/>} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
              
                
            </Route>

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
    
  
  </BrowserRouter>
  );
}


