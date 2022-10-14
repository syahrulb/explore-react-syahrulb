// import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/index'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='*' element={null} />
          </Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
