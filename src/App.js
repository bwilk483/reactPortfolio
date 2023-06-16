import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

// React Blog Routes Start
import ReactBlog from "./Projects/ReactBlog/RBRoutes/RBHome/Rbhome";
import RbLogin from "./Projects/ReactBlog/RBRoutes/RbLogin/RbLogin";
import RbSinglePost from "./Projects/ReactBlog/RBRoutes/RbSingle/RbSingle";
import RbWrite from "./Projects/ReactBlog/RBRoutes/RbWrite/RbWrite";
import RbRegister from "./Projects/ReactBlog/RBRoutes/RbRegister/RbRegister";
import RbSettings from "./Projects/ReactBlog/RBRoutes/RbSettings/RbSettings";
// React Blog Routes End

// React FourstatesConstruction Routes Start
import FSCHome from "./Projects/FourStatesCon/FSCRoutes/FSCHome/FSCHome";
// React FourstatesConstruction Routes Start

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

        {/* React Blog Routes Start */}
        <Route path="/reactblog" element={<ReactBlog />}></Route>
        <Route path="/reactblog/login" element={<RbLogin />}></Route>
        <Route path="/reactblog/Single" element={<RbSinglePost />}></Route>
        <Route path="/reactblog/Write" element={<RbWrite />}></Route>
        <Route path="/reactblog/Register" element={<RbRegister />}></Route>
        <Route path="/reactblog/Settings" element={<RbSettings />}></Route>
        {/* React Blog Routes End */}

        {/* React FourStates Construction Routes Blow */}
        <Route path="/Fourstatescontractors" element={<FSCHome />}></Route>
        {/* React FourStates Construction Routes End */}

        {/* React Retail Routes Blow */}
        <Route path="/cosretail" element={<CosRetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
