import {NavLink} from  'react-router-dom'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineLogout} from 'react-icons/ai'

export default function Header(){
    const isLoggin = localStorage.getItem("loggedin")
    
    return(
        <header className="flex px-2 md:px-16 py-8 items-center">
            <h1 className="mr-auto font-black text-2xl md:text-4xl uppercase">
              <NavLink to="/">#vanlife</NavLink>  
            </h1>

            <div className='flex gap-4 items-center'>
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

                {
                !isLoggin ? 
                <NavLink to="login">
                    <RxAvatar className='text-gray-500 text-xl'/>
                </NavLink>
                :    
                <button onClick={()=>localStorage.removeItem("loggedin")}>
                    <AiOutlineLogout className='text-gray-500 text-xl'/>
                </button>                 
                }
            </div>

        
        </header>
    )
}