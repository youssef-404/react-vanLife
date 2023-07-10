
import incomeImage from "../../assets/images/income-graph.png"



export default function Income(){
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]

    const transactionElements=transactionsData.map((transaction)=>{
        return(
            <div className="flex items-center p-4 bg-white rounded-md" key={transaction.id}>
                <h1 className="font-bold text-2xl mb-2">${transaction.amount}</h1>
                <p className=" ml-auto font-semibold text-[#4D4D4D] text-sm">{transaction.date}</p>
            </div>
            )
        })

    return(
        <>
            <div className="p-8">
                <h1 className="text-3xl font-bold">Income</h1>
                <p className="my-8 text-[#4D4D4D]">Last <span className="underline font-bold">30 days</span></p>
                <h1 className="font-extrabold text-4xl">$2,260</h1>
                <div className="my-8 max-w-lg">
                    <img src={incomeImage} alt="income graph" />
                </div>
            </div>

            <div className="p-8">
                <h1 className="text-3xl font-bold">Your transactions ({transactionsData.length})</h1>
                <p className="my-8 text-[#4D4D4D]">Last <span className="underline font-bold">30 days</span></p>

                <div className="flex flex-col gap-6">
                    {transactionElements}
                </div>
            </div>
        </>
    )
}