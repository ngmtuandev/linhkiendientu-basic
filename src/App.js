import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/conponents/header/Header'
import Footer from '../src/conponents/footer/Footer'
import Home from '../src/pages/Home'

function App() {
  return (
    <>
    
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
    </>
  );
}

export default App;
