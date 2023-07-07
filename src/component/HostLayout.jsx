import {NavLink, Outlet } from "react-router-dom";


export default function HostLayout(){
    return(
        <>
            <div className="flex mx-2 md:px-16 py-4 md:py-8 items-center gap-4 md:gap-8">
                <p className="text-gray-500 font-semibold text-sm md:text-base capitalize hover:underline hover:text-black">
                    <NavLink 
                    end
                    className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                    to=".">Dashboard</NavLink>  
                </p>

                <p className='text-gray-500 font-semibold text-sm md:text-base capitalize hover:underline hover:text-black'>
                    <NavLink 
                    className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                    to="income">Income</NavLink>
                </p>

                <p className='text-gray-500 font-semibold text-sm md:text-base capitalize hover:underline hover:text-black'>
                    <NavLink 
                    className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                    to="vans">Vans</NavLink>
                </p>

                <p className='text-gray-500 font-semibold text-sm md:text-base  capitalize hover:underline hover:text-black' >
                    <NavLink 
                    className={({isActive})=> isActive ? "text-[#161616] underline font-bold" :""} 
                    to="reviews">Reviews</NavLink> 
                </p>
            </div>

            <Outlet/>
        </>
    )
}