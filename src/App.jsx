
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import ProductsGrid from './components/ProductsGrid'
import Testimonial from './components/Testemonials'
import Usp from './components/Usp'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Usp/>
      <ProductsGrid/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
