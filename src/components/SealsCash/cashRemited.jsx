import { useState,useEffect } from "react"

const CashRemited =()=>{
    const [cashAdded, setCashAdded]=useState([])
    const [cashInput, setCashInput]=useState("")

    const handleCashAdding=()=>{
        setCashAdded([
            ...cashAdded,
            {
                id:cashAdded.length +1,
                label:`Cash ${cashAdded.length +1}`,
                amount:cashInput
            }
        ])

       setCashInput("")

       
    }


    const handleRemoveCash=(id)=>{
        setCashAdded(cashAdded.filter(cash =>{
            return cash.id !== id 
        }))
    }


    const handleCashInput=(e)=>{
        setCashInput(e.target.value)
    }
// to calculate the total cash remitted
    // useEffect(() =>{
    //     const newArray=cashAdded.map(items=>{
    //         return items.amount
    //     })
    //     console.log(newArray.map(Number).reduce((acc,curr,)=>{
    //         return acc + curr
    //     },0))
    // }, [cashAdded])

    return(
        <div className=" border border-black m-2 p-1 w-[80%] md:w-[50%]">
            <div className="flex flex-row items-center">
                <div>
                     <input
                       type="number"
                        prefix="₦"
                        value={cashInput}
                        placeholder="enter cash remitted"
                        className="border border-black outline-none w-[100%] p-1"
                        onChange={handleCashInput}
                     />
                </div>
                <button className="bg-red-200 border p-1 text-[13px] rounded border-black  hover:bg-red-300" onClick={handleCashAdding}>
                    AddCash
                </button>
            </div>
            
             <div className="ml-4 mt-3">
                {cashAdded.map(field => (
                    <div key={field.id} className="mb-2 flex items-center">
                        <label>{field.label} :</label>
                        <span className="border border-black outline-none pl-1 pr-1 w-20 ml-3">₦{field.amount}</span>
                        <button className="border border-black ml-2 pl-1 pr-1 hover:bg-red-200" onClick={()=>handleRemoveCash(field.id)}>X</button>
                    </div> 

                ))}
             </div>
        </div>
    )
}
export default CashRemited