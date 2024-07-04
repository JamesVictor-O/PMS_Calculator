import React, { useContext, useEffect } from 'react'
import PmsDetails from './components/PmsDetails/pmsDetails'
import TotalPOS from './components/totalPOS/totalPOS'
import CashRemited from './components/SealsCash/cashRemited'
import TotalContextApi from './contextApis/TotalContextApi'
import inputPage from './components/inputPage'
import { TotalAmountContext } from './contextApis/TotalContextApi'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { data } from 'autoprefixer'

const RootPage = () => {
   const navigate=useNavigate()
   const handleNavigat=()=>{
     navigate("/accountPage")
   }
  return (

    <div className='border-black border h-[100vh] md:m-4 bg-amber-50'>
      <div className='item-center justify-center flex border-b-2 text-2xl border-black bg-red-900 pb-3'>
        <h2 className='text-white mt-5'>PMS Calculator</h2>
      </div>
       <div>
              <PmsDetails/>
              <TotalPOS/>
              <CashRemited/>
           <div className='flex justify-center align-middle mt-4'>
              {/* <Link to="accountPage">Work Account</Link> */}
              <button onClick={handleNavigat}>
                 Account
              </button>
           </div>
       </div>
    </div>
  )
}

export default RootPage
