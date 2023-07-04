
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PageNotFound from './component/Pagenot/PageNotFound';
import NavBar from './component/Navbar/NavBar';
import Cart from './component/cart/Cart';
import Banner from './component/Banner/Banner';
import Login from './component/LogIn/Login';
import Register from './component/Register/Register';
import Search from './component/Search/Search';
import Offers from './component/offers/Offers';

function App() {
  // Check if the user is logged in by checking localStorage or your authentication state
  const isLoggedIn = localStorage.getItem('currentUser');

  return (
    <div>

      {isLoggedIn && <NavBar />}
      <BrowserRouter>
        <Routes>
          
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;