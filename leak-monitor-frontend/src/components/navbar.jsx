import { Link } from "react-router-dom";
import Signup from "./Signup";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
  return (
    <nav className="navbar flex md:w-2/3 mx-auto left-1 right-1  sm:left-1/6 sm:right-1/6  h-20 mt-3 fixed justify-between items-center rounded-4xl  md:left-1/6 md:right-1/6 bg-white/10 backdrop-blur-md
  border border-white/20 z-10">
      <div className="navbar-left">
        <Link to="/">
        <span className="logo text-5xl font-bold">Secdork</span>
        </Link>
      </div>

      <div className="navbar-right">
        {/* <Signup></Signup> */}
        {/* <Link to="/dashboard" className="text-white">
          Dashboard
        </Link> */}
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        {/* Show the user button when the user is signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
