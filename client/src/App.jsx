import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Layout from "./components/Layout";
import Login from "./routes/Login";
import Register from "./routes/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
