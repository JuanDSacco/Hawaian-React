import './App.css';
import ItemListContainer from './components/Routes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Routes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/tragos' element={<ItemListContainer/>} />
            <Route path='/tragos/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/form' element={<Form/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
