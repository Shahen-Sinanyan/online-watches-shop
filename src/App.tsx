import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Products from './components/Products/ProductsList';
import Layout from './components/Layout/Layout';
import Signup from './components/pages/SignUp';
import Signin from './components/pages/SignIn';
// import SingleProductPage from './components/pages/SingleProductPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/signin" element={<Signin />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/shop/:category" element={<Products />} />
               {/* <Route path="/shop/:category/:productId" element={<SingleProductPage />} /> */}
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
