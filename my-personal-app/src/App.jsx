import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}
