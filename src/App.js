import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
import Header from "./header/header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/About" element={<div>About Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
