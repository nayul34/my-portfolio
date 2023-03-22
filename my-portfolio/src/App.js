import "./App.css";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Aboutme from "./pages/Aboutme";
import Header from "./components /Header";
import Footer from "./components /Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Look from "./pages/Team/Look";
import Clone from "./pages/Team/Clone";
import Portfolio from "./pages/Solo/Portfolio";
import Realestate from "./pages/Solo/Realestate";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/project/Look-At-Me" element={<Look />} />
          <Route path="/project/clone" element={<Clone />} />
          <Route path="/project/portfolio" element={<Portfolio />} />
          <Route path="/project/real_estate" element={<Realestate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
