import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from "./components/Home";
import Header from "./components/Header";
import Nosotros from "./components/Nosotros";
import Registro from "./components/Registro";
import Ingreso from "./components/Ingreso";
import Catalogo from "./components/Catalogo";
import CatalogoDetalle from "./components/CatalogoDetalle";
import Footer from "./components/Footer";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Nosotros" element={<Nosotros/>}/>
        <Route exact path="/Registro" element={<Registro/>}/>
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
