import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import AddEmployee from './Components/AddEmployee'
import ViewEmployee from './Components/ViewEmployee'
import ViewAllEmployee from './Components/ViewAllEmployee'
import EditEmployee from './Components/EditEmployee'
import DeleteEmployee from './Components/DeleteEmployee'
import Update from './Components/Update'
import Login from './Components/Login'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='add' element={<AddEmployee/>}/>
      <Route path='view/id' element={<ViewAllEmployee/>}/>
      <Route path='edit/:id' element={<EditEmployee/>}/>
      <Route path='delete/:id' element={<DeleteEmployee/>}/>
      <Route path='view' element={<ViewEmployee/>}/>
      <Route path='update/:id' element={<Update/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App