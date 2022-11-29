import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Context
import { CartContextProvider } from '../context/CartContext';
//Componentes
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Checkout from './CheckOut/CheckOut'
const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element = {<h1>Ruta no encontrado</h1>} />
          </Routes>
        </CartContextProvider>   
      </BrowserRouter>     
      
    </>
   
  );
}

export default App;