import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-6">
      <div className="w-2/3 backdrop-blur-lg bg-white/5 border border-white/10 
                      rounded-xl px-8 py-4 flex justify-between items-center 
                      shadow-lg shadow-black/30">
        
        <h1 className="text-white text-xl font-semibold tracking-wide">
          Secdork
        </h1>

        <button className="px-5 py-2 rounded-lg bg-emerald-400/80 
                           hover:bg-emerald-400 text-black font-semibold 
                           transition duration-300">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Navbar;