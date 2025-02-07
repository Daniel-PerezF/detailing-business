import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";
import ScrollOnLoad from "./components/scroll-on-load";

function App() {
  return (
    <div className="font-lato bg-white">
      <Nav />
      <ScrollOnLoad />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
