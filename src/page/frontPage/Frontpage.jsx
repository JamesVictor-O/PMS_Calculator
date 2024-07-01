import React from 'react'
import PmsDetails from '../../components/PmsDetails/pmsDetails'
import TotalPOS from '../../components/totalPOS/totalPOS'
import CashRemited from '../../components/SealsCash/cashRemited'
import TotalContextApi from '../../contextApis/TotalContextApi'

const FrontPage = () => {
  return (

    <div className='border-black border h-[100vh] md:m-4 bg-amber-50'>
      <div className='item-center justify-center flex border-b-2 text-2xl border-black bg-red-900 pb-3'>
        <h2 className='text-white mt-5'>PMS Calculator</h2>
      </div>
       <div>
           <PmsDetails/>
           <TotalContextApi>
              <TotalPOS/>
              <CashRemited/>
           </TotalContextApi>

           <div className='flex justify-center align-middle mt-4'>
             <button className='border border-black text-[14px] p-1 rounded-sm bg-red-200 hover:bg-red-300'>Work Account</button>
           </div>
       </div>
    </div>
  )
}

export default FrontPage
