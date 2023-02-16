import './App.css';
import ItemListContainer from './components/Routes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Routes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tragos' element={<ItemListContainer/>} />
          <Route path='/tragos/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
