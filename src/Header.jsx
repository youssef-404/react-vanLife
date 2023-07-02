import {Link} from  'react-router-dom'

export default function Header(){
    return(
        <header className="flex px-16 py-8 items-center">
            <h1 className="mr-auto font-black text-4xl uppercase">
              <Link to="/">#vanlife</Link>  
            </h1>
            <p className='text-gray-500 font-semibold text-lg mr-8 capitalize hover:underline hover:text-black' >
                <Link to="/about">about</Link> 
            </p>
            <p className='text-gray-500 font-semibold text-lg capitalize'>
                <Link>vans</Link>
            </p>
        
        </header>
    )
}