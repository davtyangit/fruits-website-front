import { Navbar } from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home'
import { ProductPage } from './pages/products/ProductPage'
import { Card } from './pages/card/Card';
import { Fruits } from './pages/fruits/Fruits';
import { Vagetables } from './pages/vagetables/Vagetables';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <ToastContainer autoClose={500} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Card />} path="/card" />
        <Route element={<ProductPage />} path="/products" />
        <Route element={<Vagetables />} path="/products/vagetables" />
        <Route element={<Fruits />} path="/products/fruits" />
      </Routes>
    </div>
  );
}

export default App;
