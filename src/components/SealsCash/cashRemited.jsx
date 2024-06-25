import { useState } from "react"
import CurrencyInput from "react-currency-input-field"

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
    }

    const handleCashInput=(e)=>{
        setCashInput(e.target.value)
    }
    return(
        <div className=" border border-black m-2 p-1 w-[70%] md:w-[20%]">
            <div className="flex flex-row justify-center items-center">
                <div>
                    <CurrencyInput  
                            type="text"
                            prefix="₦"
                            name="number"
                            placeholder="Enter cash amount"
                            allowNegativeValue={false}
                            decimalsLimit={2}
                            allowDecimals={true}
                            className="border border-black outline-none w-[90%] p-1"
                            onChange={handleCashInput}
                    />
                    
                </div>
                <button className="bg-red-200 border p-1 text-[13px] rounded border-black  hover:bg-red-300" onClick={handleCashAdding}>
                    AddCash
                </button>
            </div>
            
             <div className="ml-4 mt-3">
                {cashAdded.map(field => (
                    <div key={field.id} className="mb-2">
                        <label>{field.label} :</label>
                        <span className="border border-black outline-none pl-1 pr-1 w-20 ml-3">{field.amount}</span>
                    </div> 

                ))}
             </div>
        </div>
    )
}
export default CashRemited