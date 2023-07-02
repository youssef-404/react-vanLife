
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"


export default function About(){
    return(
      <div className="flex flex-col">
        <img className="max-h-96 object-center object-fit" src={bgImg} alt="banner" />
        <div className="px-4 py-8">
            <h1 className="text-black text-4xl font-bold mb-5">
                Don't squeeze in a sedan when you could relax in a van.
            </h1>
            <p>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br/>
                <br/>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className="bg-[#FFCC8D] p-12 flex flex-col items-center mt-16">
                <h3 className="mb-8 font-bold text-black text-2xl text-center b">
                    Your destination is waiting. <br/>
                    Your van is ready.
                </h3>

                <div className="px-4 py-2 cursor-pointer text-lg hover:bg-black font-extrabold bg-black/90 rounded-md text-white ">
                    <Link to="/van">Explore our vans</Link>
                </div>
            
            </div>
        </div>
      </div>
    )
  }