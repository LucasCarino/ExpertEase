import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Registro from "./pages/Registro";
import Ingreso from "./pages/Ingreso";
import Catalogo from "./pages/Catalogo";
import CatalogoDetalle from "./pages/CatalogoDetalle";
import Admin from "./pages/Admin";
import Footer from "./pages/Footer";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import ScrollToTop from "./ScrollToTop";
import Navbar from './pages/Navbar';


function App() {
  return (
    <Router>
      {/* {auth.auth ? <Header/> : <NotAuthNavbar/>} */}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Nosotros" element={<Nosotros/>}/>
        <Route exact path="/Registro" element={<Registro/>}/>
        <Route exact path="/Admin" element={<Admin/>}/>
        <Route exact path="/Ingreso" element={<Ingreso/>}/>
        <Route exact path="/Catalogo" element={<Catalogo/>}/>
        <Route exact path="/Catalogo/:id" element={<CatalogoDetalle/>}/>
        <Route exact path="/PreguntasFrecuentes" element={<PreguntasFrecuentes/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
