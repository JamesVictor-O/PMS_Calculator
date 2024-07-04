import { createContext,useEffect,useState } from "react";

export const TotalAmountContext=createContext(null)

const TotalContextApi = ({children}) => {
    const [isFocused, setIsFocused]=useState(false)
    const [posFigures, setPosFigures]=useState("0")
    const [totalProductSold, setTotalProductSold]=useState(0)
    const [cashAdded, setCashAdded]=useState([])
    const [totalAmounts, setTotalAmounts]=useState({
      totalCashRemited:0,
      totalPos:0
    })
   

// to sum up the total pos 
 useEffect(()=>{
  
    const values=posFigures.split(",").map(Number)
    const totalfigure=values.reduce((acc,curr)=>{
           return acc + curr
       },0)
    setTotalAmounts((prevAmounts)=>({
      ...prevAmounts,
      totalPos:totalfigure
    }))

 },[posFigures])

//  to calculate the total cash remitted
    useEffect(() =>{
        const newArray=cashAdded.map(items=>{
            return items.amount
        })
        const totalCashRemited = newArray.map(Number).reduce((acc, curr) => acc + curr, 0);
        setTotalAmounts((prevAmounts)=>({
          ...prevAmounts,
          totalCashRemited:totalCashRemited
        }))
    }, [cashAdded])


  const value={
    isFocused,
    setIsFocused,
    setPosFigures,
    cashAdded,
    setCashAdded,
    setTotalProductSold,
    totalAmounts,
    totalProductSold
  }
  return (
    <TotalAmountContext.Provider value={value}>{children}</TotalAmountContext.Provider>
  )
}

export default TotalContextApi

