import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './routes/PrivateRoute'
import AddStudent from './pages/AddStudent'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route element={<PrivateRoute/>}>
          <Route path='/add-student' element={<AddStudent/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App