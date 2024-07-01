import { createContext,useEffect,useState } from "react";

export const TotalAmountContext=createContext(null)

const TotalContextApi = ({children}) => {
    const [isFocused, setIsFocused]=useState(false)
    const [posFigures, setPosFigures]=useState("")
    const [cashAdded, setCashAdded]=useState([])
    const [totalAmounts, setTotalAmounts]=useState({
      totalCashRemited:0,
      totalPos:0
    })
   


 useEffect(()=>{
    const values=posFigures.split(",").map(Number)

    const totalfigure=values.reduce((acc,curr)=>{
           return acc + curr
       },0)

    setTotalAmounts({
      ...totalAmounts,
      totalPos:totalfigure

    })
 },[posFigures])

//  to calculate the total cash remitted
    useEffect(() =>{
        const newArray=cashAdded.map(items=>{
            return items.amount
        })
        const totalCashRemited=newArray.map(Number).reduce((acc,curr,)=>{
            return acc + curr
        },0)
        setTotalAmounts({
          ...totalAmounts,
          totalCashRemited
        })
    }, [cashAdded])


  const value={
    isFocused,
    setIsFocused,
    setPosFigures,
    cashAdded,
    setCashAdded,
    totalAmounts
  }
  return (
    <TotalAmountContext.Provider value={value}>{children}</TotalAmountContext.Provider>
  )
}

export default TotalContextApi

