import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/conponents/header/Header'
import Footer from '../src/conponents/footer/Footer'
import Home from '../src/pages/Home'
import path from './ultis/path';
import DetailProduct from './conponents/products/DetailProduct';
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <>
    
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path={path.HOME} element={<Home></Home>}></Route>
            <Route exact path={path.PRODUCT__ID} element={<DetailProduct></DetailProduct>}></Route>
          </Routes>
          <Routes><Route exact path={path.LOGIN} element={<Login></Login>}></Route></Routes>
          <Routes><Route exact path={path.REGISTER} element={<Register></Register>}></Route></Routes>
          <Footer></Footer>
          
          
        </Router>
    </>
  );
}

export default App;
