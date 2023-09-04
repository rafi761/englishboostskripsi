import { SignIn, currentUser } from "@clerk/nextjs";
 
export default async function Page() {
  const user = await currentUser()
  console.log(user);
  
  return <SignIn />;
}