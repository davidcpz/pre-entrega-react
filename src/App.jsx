import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './components/Cart/Cart';
import { PrductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import {RutaProtegida} from './components/RutaProtegida/RutaProtegida';
import { Login } from './components/Login/Login';
import {MainLayout} from './layouts/MainLayout';
import {AdminLayout} from './layouts/AdminLayout';
 


function App() {
  

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element = { <MainLayout/> }> 
              <Route 
              path = "/" 
              element = {<ItemListContainer titulo ={"bienvenidos"} />}
              />
           {/*  <Route path = "/detail/:id" element = {<ItemListContainer/>}/>   */}
             
             <Route 
              path = "/category/:category" 
              element = {<ItemListContainer titulo ={"bienvenidos"} />}
              />

           <Route path = "/detail/:id" element = {<ItemDetailContainer/>}/>
           <Route path='/carrito'element = {<Cart/>} />
           </Route>

           <Route path="/admin" element ={<AdminLayout />}/>
           <Route index element= {<Login />}/>
           <Route 
           path ="alta-productos"
           element ={
            <RutaProtegida>
              <ProductFormContainer/>
            </RutaProtegida>
           }
           />
           </Route>
          </Routes>

          <Footer/>
       </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App
