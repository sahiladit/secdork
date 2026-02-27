import React from "react";
import Navbar from "../components/navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <Navbar />

      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
          Identify Your <span className="text-emerald-400">Data Breaches</span> Before
          They Identify You
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl">
          AI-powered agents analyze breach patterns across emails, phone numbers,
          addresses, and digital footprints — so you stay ahead of exposure.
        </p>
      </section>

      <section className="mt-24 flex justify-center px-6">
        <div className="grid md:grid-cols-3 gap-8 w-5/6">
          
          <div className="backdrop-blur-md bg-white/5 border border-white/10 
                          rounded-xl p-6 hover:border-emerald-400/50 
                          transition duration-300">
            <h3 className="text-lg font-semibold mb-3">AI Breach Prediction</h3>
            <p className="text-gray-400 text-sm">
              We don’t just detect past leaks — we analyze patterns and predict
              potential exposure risks.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 
                          rounded-xl p-6 hover:border-emerald-400/50 
                          transition duration-300">
            <h3 className="text-lg font-semibold mb-3">Multi-Data Monitoring</h3>
            <p className="text-gray-400 text-sm">
              Monitor emails, numbers, addresses, and associated digital
              identities in one secure dashboard.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 
                          rounded-xl p-6 hover:border-emerald-400/50 
                          transition duration-300">
            <h3 className="text-lg font-semibold mb-3">Real-Time Alerts</h3>
            <p className="text-gray-400 text-sm">
              Instant AI-triggered notifications when suspicious exposure is
              detected.
            </p>
          </div>

        </div>
      </section>

      <footer className="text-center text-gray-600 mt-24 pb-8 text-sm">
        © {new Date().getFullYear()} Secdork — AI Data Breach Intelligence
      </footer>
    </div>
  );
}