import React from 'react'
import Sidebar from './componets/Sidebar'
import DashBoard from './componets/DashBoard'
import Home from './componets/Home'
import Class from './componets/Class'
import User from './componets/User'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  return <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/class' element={<Class/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='*' element={<Navigate to='/dashboard'/>}/>
    </Routes>
    </BrowserRouter> 
  </div>
}

export default App