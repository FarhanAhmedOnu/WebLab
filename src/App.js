import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Main from "./pages/main/Main";
import { Shop } from "./pages/shop/shop";
import  Contact  from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Signup from './pages/signup/Signup'; 
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import Checkout from "./pages/cart/Checkout"
import SellerDashboard from "./components/SellerDashboard";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
        
            <Route path="/"  element={<Main/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="/AboutPage" element={<AboutPage/>} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/SellerDashboard" element={<SellerDashboard />} />
          </Routes>
          <Footer/>
        </Router>

      </ShopContextProvider>
    </div>
  );
}

export default App;
