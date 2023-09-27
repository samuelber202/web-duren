import { Routes, Route } from "react-router-dom";
import Beranda from "./Beranda";
import Navbar from "./components/layouts/Navbar";
import "./globals.css";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </main>
  );
}

export default App;
