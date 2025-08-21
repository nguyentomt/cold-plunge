import Image from "next/image";
import { auth } from "../../auth";
// import { getServerSession } from "next-auth";
import Link from "next/link";
// import { SignIn } from "@/components/sign-in";\
import Banner from "@/components/banner";
import Carousel from "@/components/carousel";

export default async function Home() {
  const ContrastTherapy = () => {
    return (
      <div className="pb-8 bg-gray-100 rounded-xl">
        <h2 id="contrast" className="p-4 text-center lg:text-left">
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
    );
  };

  const ColdWaterImmersion = () => {
    return (
      <div className="pb-8 bg-gray-100 rounded-xl">
        <h2 id="cwi" className="p-4 text-center lg:text-left">
          # Cold Water Immersion
        </h2>

        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full px-4 lg:pl-24 text-lg pb-8 text-justify">
              <a
                href="https://longevity.stanford.edu/lifestyle/2024/05/22/jumping-into-the-ice-bath-trend-mental-health-benefits-of-cold-water-immersion/"
                target="_new"
                className="underline"
              >
                Stanford Center on Longevity: Lifestyle Medicine (2024)
              </a>
              : This article is a compilation of research on the benefits of
              Cold Water Immersion. These studies show that cold water immersion
              may improve mental health by increasing endorphin and
              norepinephrine levels, and may also improve resilience to stress
              by decreasing cortisol levels.
              <p className="py-4">
                &quot;Emerging studies now suggest that plunging into cold water
                (roughly 10-15°C, 50-60°F) can improve mood, decrease stress,
                and potentially slow the progression of neurodegenerative
                diseases.&quot;
              </p>
            </div>
          </div>

          <div className="bg-black lg:bg-transparent flex w-full lg:w-1/2 justify-center items-center">
            <Image
              src="https://longevity.stanford.edu/lifestyle/wp-content/uploads/sites/31/2024/05/Blog-Photos.png"
              width="469"
              height="369"
              alt="Contrast Therapy"
              className=""
            />
          </div>
        </div>
      </div>
    );
  };

  const slides = [
    { id: "white-paper-01" },
    { id: "white-paper-02" },
    { id: "white-paper-03" },
    { id: "white-paper-04" },
    { id: "white-paper-05" },
    { id: "white-paper-06" },
    { id: "white-paper-07" },
    { id: "white-paper-08" },
    { id: "white-paper-09" },
    { id: "white-paper-10" },
    { id: "white-paper-11" },
    { id: "white-paper-12" },
    { id: "white-paper-13" },
    // { id: "contrast-therapy", component: <ContrastTherapy /> },
    // { id: "cold-water-immersion", component: <ColdWaterImmersion /> },
  ];

  const WhitePaper = () => {
    return (
      <div
        id="resources"
        className="pb-2 max-w-[50rem] rounded-xl mt-[20%] lg:mt-[15%]"
      >
        <Carousel loop>
          {slides.map((slide, index) => {
            return (
              <div
                className="relative flex-[0_0_100%] embla__slide"
                key={slide.id}
              >
                <article
                  className="flex justify-center "
                  // style={{ backgroundImage: `url('/whitepaper/wp${index+1}')`, backgroundSize: 'cover' }}
                >
                  <Image
                    src={`/whitepaper/wp${index + 1}.png`}
                    width="669"
                    height="420"
                    alt={`White Paper page ${index + 1}`}
                  />
                </article>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-4 items-center pt-28 lg:pt-32 overflow-clip z-40">
      <div className="w-4/5 lg:w-1/3">
        <div className="w-full bg-red-950 opacity-70 lg:text-xl p-4 rounded-3xl text-gray-100 text-justify">
          Meta labs is a communal space designed for training and sharing of
          experiences relating to the basics of hot and cold practices and their
          respective effects on the human body. We believe this knowledge is
          every man’s responsibility to behold in effort to uplift the health of
          our global communities. With that said, we would like to invite you to
          join us on this journey of work, knowledge and better mental awareness
          today. - Meta Labs Cold Plunge
          <p className="mt-4 mb-2 z-20 text-center">
            <Link href="/book" className="text-gray-100 font-extrabold">
              BOOK YOUR VISIT HERE.
            </Link>
          </p>
        </div>
      </div>

      <article className="flex flex-col items-center pt-12 lg:py-24 text-gray-800 w-screen lg:w-4/5 overflow-clip">
        <Banner />
        <WhitePaper />
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
