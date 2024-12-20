import React from 'react'
import "./index.css"
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import AfterHero from './components/After Hero/AfterHero.jsx'
import WhyUs from './components/Why Us/WhyUs.jsx'
import YourHealth from './components/YourHealth/YourHealth.jsx'
import OurProduct from './components/Our Product/OurProduct.jsx'
import LatestNews from './components/Latest News/LatestNews.jsx'
import BeforeFooter from './components/Before Footer/BeforeFooter.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <AfterHero />
    <WhyUs />
    <YourHealth />
    <OurProduct />
    <LatestNews />
    <BeforeFooter />
    <Footer />

    

    
    </>
  )
}

export default App

