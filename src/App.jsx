import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timepage from './components/Timepage'
import Shopscrad from './components/Shopscrad'
import BestSellers from './components/BestSellers'
import MarqueePage from './components/MarqueePage'
import ProudectDittles from './components/ProudectDittles'
import CustomrReviews from './components/CustomrReviews'
import HlapLine from './components/HlapLine'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Timepage/>
      <Shopscrad/>
      <BestSellers/>
      <MarqueePage/>
      <ProudectDittles/>
      <CustomrReviews/>
      <HlapLine/>
      <Footer/>
    </div>
  )
}

export default App
