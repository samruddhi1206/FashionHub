import './App.css'
import Footer from './components/footer/Footer'
import Slider from './components/header/Slider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './components/navbar/Nav.jsx'
import PageNotFound from './components/pagenotfound/PageNotFound.jsx'
import ContactUs from './components/contactus/ContactUs.jsx'
import TopProducts from './components/trendingproduct/Top.jsx'
import AllProducts from './components/trendingproduct/BestSelling.jsx'
import BestProduct from './components/bestproduct/BestProduct.jsx'
import Banner from './components/banner/Banner.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
        <div>
          <Nav/>
          <Slider/>
          <TopProducts/>
          <BestProduct/>
          <Banner/>
          <Footer/>
        </div>
    },
    {
      path:"/products",
      element:
        <div>
          <Nav/>
          <AllProducts/>
          <Footer/>
        </div>
    },
    {
      path:"/bestproduct",
      element:
        <div>
          <Nav/>
          <BestProduct/>
          <Footer/>
        </div>
    },
    {
      path:"/contactus",
      element:
        <div>
          <Nav/>
          <ContactUs/>
          <Footer/>
        </div>
    },
    {
      path:"*",
      element:
        <div>
          <PageNotFound/>
        </div>
    }
  ]
)
function App() {


  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
