import Home from "./components/Home";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;
