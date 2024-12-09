import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Layout from "./components/Layout";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Profile from "./routes/Profile";

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
        <Route path=":id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
