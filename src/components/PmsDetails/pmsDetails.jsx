import { useState } from "react"

// imported utility function
import { CalculatePmsLiters, formatToCurrency } from "../../utili/pmsUtiliyFunctions";

const PmsDetails =()=>{
    const [Pms, setPms]= useState({
        openingPMS: "",
        closingPMS:"",
        pricePerLiter:600
    });

    const Liters=CalculatePmsLiters(Pms.closingPMS,Pms.openingPMS)

    const totalPrices= Liters * Pms.pricePerLiter

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
     const handlePriceChange=(e)=>{
        setPms(prevState=>({
            ...prevState,
            pricePerLiter:e.target.value
        }))
     }

    return( 
      <div className="flex flex-col gap-[10px] max-w-[500px] md:max-w-[400px]  m-3 md:m-auto md:mt-6">
          <div className="flex justify-between align-middle items-center">
              <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[18px] md:text-[20px]">Pms Opening</label>
              <span className="text-[40px] mr-[20px] md:text-[25px]">:</span>
              <input
              type="number"
              value={Pms.openingPMS}
              className="flex-1 p-[5px] outline-none border-black border h-6 md:h-7 appearance-none"
              onChange={handleOpeningPmsInput}
              />
              
          </div>
          <div className="flex justify-between align-middle items-center">
              <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[18px] md:text-[20px]">Pms Closing</label>
              <span className="text-[40px] mr-[20px] md:text-[25px]">:</span>
              <input
              value={Pms.closingPMS}
              className="flex-1 p-[5px] outline-none border-black border h-6 md:h-7 appearance-none" 
              type="number"
              onChange={handleClosingPmsInput}
              />
              
          </div>
          <div className="flex justify-between align-middle items-center">
              <label  className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[18px] md:text-[20px]">Price PerLiter</label>
              <span className="text-[40px] mr-[20px] md:text-[25px]">:</span>
              <input 
              value={Pms.pricePerLiter}
              className="flex-1 p-[5px] outline-none border-black border h-6 md:h-7 appearance-none"
              type="number"
              onChange={handlePriceChange}
              />
          </div>
          <div className="flex justify-between align-middle items-center">
              <label className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[18px] md:text-[20px]" >Total Liters</label>
              <span className="text-[40px] mr-[20px] md:text-[25px]">:</span>
              <input className="flex-1 p-[5px] outline-none h-6 md:h-7 appearance-none" type="number" value={totalPrices} />
          </div>
          <div className="flex justify-between align-middle items-center">
              <label  className="flex-1 mr-[10px] text-red-900 text-left md:text-right text-[18px] md:text-[20px]">Amount</label>
              <span className="text-[40px] mr-[20px] md:text-[25px]">:</span>
              <input className="flex-1 p-[5px] outline-none h-6 md:h-7 appearance-none" type="text" value={priceInNaira}/>
          </div>
          
      </div>

    )
}

export default PmsDetails