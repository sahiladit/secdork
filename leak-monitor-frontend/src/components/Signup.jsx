import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function Signup() {
  const { isSignedIn } = useUser();

  return (
    <div style={{ padding: "5px" }}>
      {!isSignedIn ? (
        <>
          <SignInButton>
            <button className="btn secondary">Login</button>
          </SignInButton>

          <SignUpButton>
            <button className="btn primary">Sign Up</button>
          </SignUpButton>
        </>
      ) : (
        <UserButton
  afterSignOutUrl="/"
  appearance={{
    elements: {
      avatarBox: "w-12 h-12",   // size of the avatar
      userButtonTrigger: "p-2", // clickable area
    },
  }}
/>

      )}
    </div>
  );
}
