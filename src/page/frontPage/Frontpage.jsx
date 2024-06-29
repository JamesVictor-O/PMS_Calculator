import React from 'react'
import PmsDetails from '../../components/PmsDetails/pmsDetails'
import TotalPOS from '../../components/totalPOS/totalPOS'
import CashRemited from '../../components/SealsCash/cashRemited'
import TotalContextApi from '../../contextApis/TotalContextApi'

const FrontPage = () => {
  return (

    <div className='border-black border h-full m-2'>
      <div className='item-center justify-center flex border-b-2 mt-7 text-2xl border-black pb-3'>PMS Calculator</div>
       <div>
           <PmsDetails/>
           <TotalContextApi>
              <TotalPOS/>
           </TotalContextApi>
           <CashRemited/>
       </div>
    </div>
  )
}

export default FrontPage
