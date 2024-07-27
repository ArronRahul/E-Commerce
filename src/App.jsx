
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCat from './Pages/ShopCat'
import Productpage from './Pages/Productpage'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_ban from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_ban from './Components/Assets/Frontend_Assets/banner_women.png'
import kid_ban from './Components/Assets/Frontend_Assets/banner_kids.png'

function App() {

  return (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCat banner={men_ban} cat='men' />} />
        <Route path='/womens' element={<ShopCat banner={women_ban}  cat='women' />} />
        <Route path='/kids' element={<ShopCat banner={kid_ban}  cat='kid' />} />
        <Route path='/product/:productid' element={<Productpage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App
