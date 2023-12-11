import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Products from './components/Products/Products';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout/Checkout';
import { ProductProvider } from './components/ProductContext';
import ProductPage from './components/ProductPage/ProductPage';
import DialogTrans from './components/DialogTrans/DialogTrans';
import AuthModal from './components/AuthModal/AuthModal';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';

function App() {


  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            {/* <DialogTrans /> */}
            <Routes>
              <Route path='*' element={<Products />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/products/:id' element={<ProductPage />} />
              <Route path='/about' element={<AboutUsPage />} />

            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;


