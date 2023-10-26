import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Router>
        {/* <ResponsiveAppBar /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
