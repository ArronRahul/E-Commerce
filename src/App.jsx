
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCat from './Pages/ShopCat'
import Productpage from './Pages/Productpage'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {

  return (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCat cat='men' />} />
        <Route path='/womens' element={<ShopCat cat='women' />} />
        <Route path='/kids' element={<ShopCat cat='kid' />} />
        <Route path='/product/:productid' element={<Productpage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App
