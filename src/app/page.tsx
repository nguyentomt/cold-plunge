import Image from "next/image";
import { auth } from "../../auth";
// import { getServerSession } from "next-auth";
import Preview from "@/components/preview";
import { SignIn } from "@/components/sign-in";

export default async function Home() {
  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-center bg-no-repeat">
        {session && session.user ? (
          <div className="flex flex-col items-center">
            <SignIn />
            
          </div> 
        ) : <Preview />}
      </main>
  );
}
