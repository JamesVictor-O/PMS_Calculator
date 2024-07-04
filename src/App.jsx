import RootPage from './Rootpage'
import './index.css'
import { Outlet, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import AccountPage from './page/accountpage/AccountPage'
import TotalContextApi from './contextApis/TotalContextApi'


function App() {
   const router=createBrowserRouter(
      createRoutesFromElements(
        <Route>
           <Route path='/' element={<RootPage/>}/>
           <Route path='accountPage' element={<AccountPage/>}/>
        </Route>
      )
   )
  return (
       <div>
         <TotalContextApi>
           <RouterProvider router={router}/>
         </TotalContextApi>
          
       </div>
  )
}

export default App
