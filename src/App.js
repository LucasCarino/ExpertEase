import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
