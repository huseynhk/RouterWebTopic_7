import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/abouts/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
