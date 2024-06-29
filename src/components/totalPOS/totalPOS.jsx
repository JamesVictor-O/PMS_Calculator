import React from 'react'
import { useState,useContext} from 'react'
import { TotalAmountContext } from '../../contextApis/TotalContextApi'

const TotalPOS=()=> {
    const {setIsFocused,isFocused,setPosFigures}=useContext(TotalAmountContext)
    
    const handleOnChange=(e)=>{
        setPosFigures(e.target.value)
    }
    const handleOnHover=()=>{
        setIsFocused(!isFocused)
    }
  return (
    <div className='flex align-middle items-center ml-5'>
      <label>Total POS  <span>:</span></label>
      <textarea 
      className={`border border-black click:bg-red-400 outline-none ml-1 pl-1 text-red-500
        ${isFocused ? "absolute w-[95%] h-full top-0 left-0" : "relative"}`
        }
      onClick={handleOnHover}
      onChange={handleOnChange}
      ></textarea>
    </div>
  )
}

export default TotalPOS
