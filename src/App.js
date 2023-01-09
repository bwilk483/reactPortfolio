import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import ReactBlog from "./routes/ReactBlog/ReactBlog";
import CosRetail from "./routes/CosRetail/CosRetail";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/reactblog" element={<ReactBlog />}></Route>
        <Route path="/cosretail" element={<CosRetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
