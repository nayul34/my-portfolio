import "./App.css";
import "./App.css";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Aboutme from "./pages/Aboutme";
import Header from "./components /Header";
import Footer from "./components /Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Look from "./pages/Team/Look";
import Clone from "./pages/Team/Clone";
import Realestate from "./pages/Solo/Realestate";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <div className="App h-auto min-h-full pb-24">
      <BrowserRouter>
        <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project" element={<Project />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/project/lookatme" element={<Look />} />
            <Route path="/project/clone" element={<Clone />} />
            <Route path="/project/realestate" element={<Realestate />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
