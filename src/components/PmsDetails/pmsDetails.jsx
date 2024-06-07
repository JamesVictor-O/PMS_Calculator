import { useState } from "react"
const PmsDetails =()=>{

    const [Pms, setPms]= useState({
        openingPMS: "",
        closingPMS:""
    });

     const handle_ClosingChange=(event)=>{
        setPms(prevState => ({
            ...prevState,
            openingPMS: event.target.value
        }))
     }
    return(
        <div className=" m-4">
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3">Pms Opening :</label>
                <input 
                  type="number" 
                  value={Pms.openingPMS} 
                  className="outline-none border-black border pl-1" 
                  onChange={handle_ClosingChange}
                />
            </div>
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3">Pms Closing :</label>
                <input value={Pms.closingPMS} type="number" className="outline-none border-black border"/>
            </div>
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3">Liters :</label>
                <input type="number" className="outline-none border-black border"/>
            </div>
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3">Total Amount :</label>
                <input type="number" className="outline-none border-black border"/>
            </div>
        </div>
    )
}

export default PmsDetails