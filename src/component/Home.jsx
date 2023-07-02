import { Link } from "react-router-dom";

export default function Home(){
    return(
      <div id='homeCover' className="px-8 flex-1 py-16 flex flex-col items-center">
        <h1 className=" mt-8 mb-16 font-extrabold text-4xl text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className=" font-medium text-base text-white mb-16">
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
      
        <div className=" cursor-pointer text-lg hover:bg-orange-500/90 py-4 px-32 font-extrabold bg-orange-400 rounded-md text-white ">
          <Link to="/van">Find your van</Link>
        </div>
      </div>
    )
  }
  