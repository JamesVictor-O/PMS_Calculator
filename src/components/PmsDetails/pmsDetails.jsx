const PmsDetails =()=>{
    return(
        <div className=" m-4">
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3">Pms Opening :</label>
                <input type="number" className="outline-none border-black border pl-1"/>
            </div>
            <div className="flex align-middle p-1 justify-center mb-2">
                <label className="mr-3">Pms Closing :</label>
                <input type="number" className="outline-none border-black border"/>
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