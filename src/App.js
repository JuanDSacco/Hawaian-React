import './App.css';
import ItemListContainer from './components/Routes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Routes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Routes/Home/Home';
import CartProvider from './context/CartContext';
import Cart from './components/Routes/Cart/Cart';
import Form from './components/Routes/Form/Form';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Detalle from './components/Routes/Detalle/Detalle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/item' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/nosotros' element={<Detalle/>} /> 
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
