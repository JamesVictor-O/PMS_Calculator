import PmsDetails from './components/PmsDetails/pmsDetails'
import './index.css'

function App() {
  

  return (
    <div className='border-black border h-full m-2'>
      <div className='item-center justify-center flex border-b-2 mt-7 text-2xl border-black pb-3'>PMS Calculator</div>
       <div>
           <PmsDetails></PmsDetails>
       </div>
    </div>
  )
}

export default App
