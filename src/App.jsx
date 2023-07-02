import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    
  <BrowserRouter>
    <div className='min-h-screen h-full flex flex-col'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
      <Footer/>
  </BrowserRouter>
  );
}


