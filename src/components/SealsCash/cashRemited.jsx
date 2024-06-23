import { useState } from "react"

const CashRemited =()=>{
    const [cashAdded, setCashAdded]=useState([])

    const handleCashAdding=()=>{
        setCashAdded([
            ...cashAdded,
            {
                id:cashAdded.length +1,
                label:`Cash ${cashAdded.length +1}`
            }
        ])
    }
    return(
        <div className="relative  border border-black m-2 p-1">
            <button className="bg-red-200 border border-black p-1 mb-2 ml-4" onClick={handleCashAdding}>
                Add Cash
            </button>
             <div className="ml-4">
                {cashAdded.map(field => (
                    <div key={field.id} className="mb-2">
                        <label>{field.label} :</label>
                        <input 
                          type="text"
                          className="border border-black outline-none pl-1 pr-1 w-20 ml-3"
                        />
                    </div>

                ))}
             </div>
        </div>
    )
}
export default CashRemited