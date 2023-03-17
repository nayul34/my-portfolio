import "./App.css";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Aboutme from "./pages/Aboutme";
import Header from "./components /Header";
import Footer from "./components /Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aboutme" element={<Aboutme />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
