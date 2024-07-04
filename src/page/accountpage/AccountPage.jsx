import React, { useEffect } from 'react'
import { useContext } from 'react'
import { v4 as uuidv4 } from "uuid"
import { TotalAmountContext } from '../../contextApis/TotalContextApi'
import { useLocation } from 'react-router-dom'

const AccountPage = () => {
    const {totalAmounts, totalProductSold,} =useContext(TotalAmountContext)
    const arrayOfInfo=[
      {
        lable:"TOATAL SALE",
        Amount:totalProductSold,
        id:uuidv4()
      },
      {
        lable:"TOTAL POS",
        Amount:totalAmounts.totalPos,
        id:uuidv4()
      },
      {
        lable:"TOTAL CASH REMITTED",
        Amount:totalAmounts.totalCashRemited,
        id:uuidv4()
      },
    ]

    const AccountWorked=()=>{
       return totalProductSold-totalAmounts.totalPos-totalAmounts.totalCashRemited;
    }
    console.log(AccountWorked())
  return (
    <div className=''>
       <div className='bg-red-900 flex justify-center underline text-white p-2'>
         <h2>ACCOUNT SUMMARY</h2>
       </div>

       <div className='flex justify-center flex-col align-middle md:items-center'>
         {arrayOfInfo.map(details=>(
          <div key={details.id} className='bg-red-50 mt-2 flex justify-between md: px-4 md:w-[20%]'>
            <span>{details.lable}:</span>
            <span>{details.Amount}</span>
         </div>
         ))}

         <div>
         <span>SHORTAGE:</span>
         <span>{}</span>
         </div>
       </div>

    </div>
  )
}

export default AccountPage
