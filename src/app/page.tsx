import Image from "next/image";
import { auth } from "../../auth";
// import { getServerSession } from "next-auth";
import Link from "next/link";
// import { SignIn } from "@/components/sign-in";

export default async function Home() {
  return (
    <section className="flex flex-col gap-4 items-center pt-24 lg:pt-32 overflow-clip z-40">
      <div className="w-4/5 lg:w-1/3">
        <div className="w-full bg-gray-100 lg:text-xl p-4 rounded-3xl text-gray-800 text-justify">
        Meta labs is a communal space built for members to train, learn and share their experiences of basic hot and cold practices and their respective effects on the human body. We believe this knowledge is every man’s responsibility to behold, and insodoing, we could together better support the health of our communities all the while supporting our government to curb today’s fast growing mental crisis. We welcome you to join our family of wellness enthusiasts on our journey of work, knowledge, and better mental awareness today.
        
        <p className="mt-4 mb-2 z-20"><Link href="/book" className="text-red-500 font-bold">Click here to schedule your visit.</Link></p>
        </div>
      </div>
      <Link href="/book" className="z-10 lg:hidden book-shadow font-bold text-gray-900 text-center py-4 px-8 text-4xl  bg-gray-50 bg-opacity-60 hover:bg-opacity-90 rounded-3xl border border-gray-500">
        Book Now
      </Link>
    </section>
  );
};



  // return (
  //   <main className="flex flex-col items-center bg-no-repeat">
  //       {session && session.user ? (
  //         <div className="flex flex-col items-center">
  //           <SignIn />
            
  //         </div> 
  //       ) : <Experience />}
  //     </main>
  // );

