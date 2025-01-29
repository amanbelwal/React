import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
     <SignInButton>
      <button>Hello</button></SignInButton>
    </div>  
  );
}