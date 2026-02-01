import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/next";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/sign-in/*"
        element={
          <AuthLayout>
            <SignIn routing="path" path="/sign-in" />
          </AuthLayout>
        }
      />

      <Route
        path="/sign-up/*"
        element={
          <AuthLayout>
            <SignUp routing="path" path="/sign-up" />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;
