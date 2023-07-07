import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';



export default function Layout() {
    return(
        <>
        <div className='min-h-screen h-full flex flex-col'>
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}