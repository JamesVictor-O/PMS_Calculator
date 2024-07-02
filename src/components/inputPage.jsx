import React from 'react'

const inputPage = () => {
  return (
    <div>
      <div>
        <label>PMS Opening</label>
        <input type='number'/>
      </div>


      <div className=" m-4 flex flex-col md:text-center space-y-2">
            <form>
                <div className="flex p-1 justify-center mb-2 items-center">
                    <label className="mr-0 text-red-900 md:mr-3 w-28 md:w-32 text-[15px] md:text-[18px]">Pms Opening <span className="text-[20px]">:</span></label>
                    <input 
                    type="number" 
                    value={Pms.openingPMS} 
                    className="outline-none border-black border p-1 h-6 md:h-7" 
                    onChange={handleOpeningPmsInput}
                    />
                </div>

                <div className="flex p-1 justify-center mb-2 items-center">
                    <label className="mr-0 md:mr-3 w-28 text-red-900 md:w-32 text-[15px] md:text-[19px]">Pms Closing <span className="text-[20px]">:</span></label>
                    <input 
                    value={Pms.closingPMS} 
                    type="number" 
                    className="outline-none border-black pl-1 border h-6 md:h-7 appearance-none"
                    onChange={handleClosingPmsInput}
                    />
                </div>
                <div>
                    <label className="mr-0 md:mr-3 w-28 text-red-900 md:w-32 text-[15px] md:text-[19px]">Price PerLiter<span className="text-[20px]">:</span></label>
                    <input
                       type="number"
                       className="outline-none border-black border h-6 md:h-7 appearance-none"
                    />
                </div>


            </form>

             <div className=" m-4 flex flex-col items-start md:items-center">
                <div className="flex align-middle p-1 justify-center mb-2">
                    <label className=" w-32 text-red-900">Pms Liters :</label>
                    <div>
                        <span>
                            {Liters}
                        </span>
                    </div>
                </div>
                
                <div className="flex items-center p-1 justify-center mb-2">
                    <label className="mr-3 text-red-900 md:w-32">Total Amount <span className="text-[20px]">:</span></label>
                    <div>
                        <span>
                            {priceInNaira}
                        </span>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default inputPage
