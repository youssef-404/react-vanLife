import {NavLink} from  'react-router-dom'

export default function Header(){

    return(
        <header className="flex px-2 md:px-16 py-8 items-center">
            <h1 className="mr-auto font-black text-2xl md:text-4xl uppercase">
              <NavLink to="/">#vanlife</NavLink>  
            </h1>

            <div className='flex gap-4'>
            <p className='text-gray-500 font-semibold md:text-lg capitalize hover:underline hover:text-black'>
                <NavLink 
                className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                to="host">Host</NavLink>
            </p>

            <p className='text-gray-500 font-semibold md:text-lg capitalize hover:underline hover:text-black' >
                <NavLink 
                className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                to="about">about</NavLink> 
            </p>
            <p className='text-gray-500 font-semibold md:text-lg capitalize hover:underline hover:text-black'>
                <NavLink 
                className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                to="vans">vans</NavLink>
            </p>
                </div>
        
        
        </header>
    )
}