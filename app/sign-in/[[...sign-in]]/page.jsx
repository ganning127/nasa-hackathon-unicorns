import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  console.log("RUNNING SIGN IN");
  return <SignIn />;
}