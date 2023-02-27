import "./App.css";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Aboutme from "./pages/Aboutme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aboutme" element={<Aboutme />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
