import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex gap-3 items-center justify-center ">
      {!isSignedIn ? (
        <>
          <Link to="/sign-in">
            <button className="btn secondary">Login</button>
          </Link>

          <Link to="/sign-up">
            <button className="btn primary">Sign Up</button>
          </Link>
        </>
      ) : (
        <UserButton afterSignOutUrl="/" />
      )}
    </div>
  );
}
