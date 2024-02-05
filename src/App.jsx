import Footer from "./components/footer";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Faq from "./pages/faq";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;