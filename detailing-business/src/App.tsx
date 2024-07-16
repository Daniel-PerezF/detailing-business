import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-lato bg-gradient-to-tr from-[#D6D6D6] to-[#F2F2F2]">
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
