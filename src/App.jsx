import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom' // ✅ Use BrowserRouter
import Home from './pages/Home'
import PrivateRoute from './routes/PrivateRoute'
import AddStudent from './pages/AddStudent'
import Login from './pages/Login'
import Header from './components/Header'
import StudentDetails from './pages/Student'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/add-student' element={<AddStudent />} />
          <Route path='/student/:id' element={<StudentDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
