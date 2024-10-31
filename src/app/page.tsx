import Image from "next/image";
import { auth } from "../../auth";
// import { getServerSession } from "next-auth";
import Link from "next/link";
// import { SignIn } from "@/components/sign-in";\
import Banner from "@/components/banner";

export default async function Home() {

  return (
    <section className="flex flex-col gap-4 items-center py-28 lg:pt-32 overflow-clip z-40">
      <div className="w-4/5 lg:w-1/3">
        <div className="w-full bg-gray-100 lg:text-xl p-4 rounded-3xl text-gray-800 text-justify">
          Meta labs is a communal space built for members to train, learn and
          share their experiences of basic hot and cold practices and their
          respective effects on the human body. We believe this knowledge is
          mankind's collective responsibility to behold, and insodoing, we could together
          better support the health of our communities all the while supporting
          our government to curb today's fast growing mental crisis. We welcome
          you to join our family of wellness enthusiasts on our journey of work,
          knowledge, and better mental awareness today.
          <p className="mt-4 mb-2 z-20">
            <Link href="/book" className="text-red-500 font-bold">
              Click here to schedule your visit.
            </Link>
          </p>
        </div>
      </div>

      <article className="flex flex-col items-center pt-12 lg:py-24 text-gray-800 w-screen lg:w-4/5 overflow-clip">
        <Banner />

        <div className="pb-8 bg-gray-100 rounded-xl mt-[20%]">
          <h2 id="contrast" className="p-4">
            # Contrast Therapy
          </h2>

          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="lg:w-1/2 flex justify-center">
              <p className="w-full px-4 lg:pl-24 text-lg pb-8 text-justify">
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6188085/"
                  target="_new"
                  className="underline"
                >
                  Journal of Athletic Training (2018)
                </a>
                : This study found that using contrast baths (CB) temporarily
                changed blood flow and oxygen levels in the calf muscles of
                healthy people. These changes might explain why CB can help with
                muscle injury recovery by improving blood circulation and oxygen
                delivery to the tissues.
              </p>
            </div>

            <div className="bg-black lg:bg-transparent flex w-full lg:w-1/2 justify-center items-center">
              <Image
                src="/contrast.jpg"
                width="360"
                height="360"
                alt="Contrast Therapy"
                className=""
              />
            </div>
          </div>
        </div>

        {/* <h2 id="wim-hof" className="w-screen h-screen pl-4">
            Wim Hof Method
            </h2> */}
      </article>

      <Link
        href="/book"
        className="z-10 my-12 lg:hidden book-shadow font-bold text-gray-900 text-center py-4 px-8 text-4xl  bg-gray-50 bg-opacity-60 hover:bg-opacity-90 rounded-3xl border border-gray-500"
      >
        Book Now
      </Link>
    </section>
  );
}

// return (
//   <main className="flex flex-col items-center bg-no-repeat">
//       {session && session.user ? (
//         <div className="flex flex-col items-center">
//           <SignIn />

//         </div>
//       ) : <Experience />}
//     </main>
// );
