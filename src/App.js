import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LayoutAdmin from "./components/layout/LayoutAdmin";
import LayoutWebsite from './components/layout/layoutWebsite';
import AddProducts from "./Page/AddProducts";
import EditProduct from "./Page/EditProduct";
import LoginPage from "./Page/LoginPage";
import ProductsPage from "./Page/ProductsPage";
import RegisterPage from "./Page/RegisterPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* LayoutWebsite */}
          <Route path="/*" element={<LayoutWebsite />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          {/* LayoutAdmin */}
          <Route path="admin/*" element={<LayoutAdmin />}>
            {/* <Route index element={<AddProducts />} /> */}
           <Route path='list-products' element={<ProductsPage />} /> 
            <Route path='add-products' element={<AddProducts />} />
            <Route path='edit/:id' element={<EditProduct></EditProduct>}> </Route>
          </Route>
        
      
          {/* <Route path="err-500" element={<ServeErrorPage />} />
          <Route path="register" element={<RegisterPage />} /> */}
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
