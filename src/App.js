import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React from 'react';
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
import RecuperarPassword from './pages/RecuperarPassword';
import { AuthProvider, useAuth } from './components/AutenticacionContext';

const ProtectedRoute = ({ element, ...props }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Ingreso" />;
  }
  return React.cloneElement(element, props);
};

function App() {

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Nosotros" element={<Nosotros/>}/>
          <Route exact path="/Registro" element={<Registro/>}/>
          <Route exact path="/Ingreso" element={<Ingreso/>}/>
          <Route exact path="/RecuperarPassword" element={<RecuperarPassword/>}/>
          <Route exact path="/Catalogo" element={<Catalogo/>}/>
          <Route exact path="/Catalogo/:id" element={<CatalogoDetalle/>}/>
          <Route exact path="/PreguntasFrecuentes" element={<PreguntasFrecuentes/>}/>
          <Route path="/Admin" element={<ProtectedRoute element={<Admin />} />} />
        </Routes>
        <Footer />
      </AuthProvider>
      {/* {auth.auth ? <Header/> : <NotAuthNavbar/>} */}
    </Router>
  );
}
export default App;
