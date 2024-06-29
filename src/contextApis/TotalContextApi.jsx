import { createContext,useEffect,useState } from "react";

export const TotalAmountContext=createContext(null)

const TotalContextApi = ({children}) => {
    const [isFocused, setIsFocused]=useState(false)
    const [posFigures, setPosFigures]=useState("")
    const [totalPosFigure, setTotalPosFigure]=useState("")
    
    

 useEffect(()=>{
    const values=posFigures.split(",").map(Number)

    const totalfigure=values.reduce((acc,curr)=>{
           return acc + curr
       },0)

    setTotalPosFigure(totalfigure)
 },[posFigures])

  const value={
    isFocused,
    setIsFocused,
    setPosFigures,
  }
  return (
    <TotalAmountContext.Provider value={value}>{children}</TotalAmountContext.Provider>
  )
}

export default TotalContextApi

