import reviewImage from "../../assets/images/reviews-graph.png"
import { BsStarFill } from "react-icons/bs"


export default function Reviews(){
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    return(
        <>
          <div className="p-8">
                <span className="flex items-center">
                    <h1 className="text-2xl font-bold">Your reviews</h1>
                    <p className="text-[#4D4D4D] text-xs ml-auto">Last <span className="underline font-bold">30 days</span></p>
                </span>

                <div className="mt-8 max-w-lg">
                    <img src={reviewImage} alt="" />                    
                </div>
            </div>

            <div className="p-8">
                <h1 className="text-2xl font-bold">Reviews ({reviewsData.length})</h1>
                

                <div className="flex flex-col mt-8 gap-6">
                    {reviewsData.map((review)=>(
                        <div className="flex flex-col gap-4 border-b border-zinc-600/30 pb-8" key={review.id}>
                            <div className="flex gap-1">
                                {
                                [...Array(review.rating)].map((_,i)=>
                                     <BsStarFill className="text-orange-500" key={i}/>
                                )}
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-xl font-bold">{review.name}</p>
                                <p className="text-[#7a7575]">{review.date}</p>
                            </div>
                            <p>
                                {review.text}
                            </p>
                        </div>       
                    ))}
                </div>
            </div>
        </>
    )
}