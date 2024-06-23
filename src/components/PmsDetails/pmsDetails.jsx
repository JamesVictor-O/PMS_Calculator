import { useState } from "react"

// imported utility function
import { CalculatePmsLiters, formatToCurrency } from "../../utili/pmsUtiliyFunctions";

const PmsDetails =()=>{

    const [Pms, setPms]= useState({
        openingPMS: "",
        closingPMS:""
    });

    const Liters=CalculatePmsLiters(Pms.closingPMS,Pms.openingPMS)

    const totalPrices= Liters * 700

    const priceInNaira=formatToCurrency(totalPrices)

     
     const handleOpeningPmsInput=(event)=>{
        setPms(prevState => ({
            ...prevState,
            openingPMS: event.target.value
        }))
     }
     const handleClosingPmsInput=(event)=>{
        setPms(prevState=>({
            ...prevState,
            closingPMS:event.target.value
        }))
     }

    return(
        <div className=" m-4 flex flex-col text-center space-y-2">
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3 w-32">Pms Opening :</label>
                <input 
                  type="number" 
                  value={Pms.openingPMS} 
                  className="outline-none border-black border p-1 h-7" 
                  onChange={handleOpeningPmsInput}
                />
            </div>

            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3 w-32">Pms Closing :</label>
                <input 
                 value={Pms.closingPMS} 
                 type="number" 
                 className="outline-none border-black pl-1 border h-7"
                 onChange={handleClosingPmsInput}
                 />
            </div>

            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3 w-32">Pms Liters :</label>
                <input 
                type="number" 
                value={Liters}
                className="outline-none border-black border pl-1 justify-end h-7"/>
            </div>
            
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3 w-32">Total Amount :</label>
                <input 
                 type="number" 
                 value={priceInNaira}
                 className="outline-none border-black pl-1 border h-7"/>
            </div>
        </div>
    )
}

export default PmsDetails