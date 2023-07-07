import { Link } from "react-router-dom";



export default function NotFound(){
    return(
        <div className="flex flex-col pt-16 items-center mx-4">
            <h1 className="text-[#161616] font-bold text-center mb-8 text-xl md:text-3xl">
                Sorry, the page you were looking for was not found.
            </h1>
        
            <Link className=" cursor-pointer text-lg hover:bg-[#161616]/90 py-4 px-16 md:px-32 font-extrabold bg-[#161616] rounded-md text-white "
           to="/">Return to Home</Link>
        </div>
    )
}