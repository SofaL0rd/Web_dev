import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Products from './components/Products/Products';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout/Checkout';
import { ProductProvider } from './components/ProductContext';
import ProductPage from './components/ProductPage/ProductPage';

function App() {


  return (
    <div className="App">
      <ProductProvider>
      <CartProvider>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path='*' element={<Products />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products/:id' element={<ProductPage />} />
      </Routes>
      <Footer />
        </BrowserRouter>
        </CartProvider>
        </ProductProvider>
    </div>
  );
}

export default App;


