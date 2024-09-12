import Link from "next/link";
import Image from "next/image";

const Resources = () => {
  return (
    <article className="flex flex-col gap-4 items-center pt-24 text-border w-screen overflow-clip">
      <div className="w-screen md:w-4/5">
        <h1 className="pl-4 text-center">Resources</h1>

        <div className="w-screen pb-8">
          <h2 id="contrast" className="pl-4"># Contrast Therapy</h2>

          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="md:w-1/2">
              <p className="w-[90%] text-lg pb-8 pl-4 text-justify">
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
              <Link
                href="/book"
                className="p-4 ml-4 rounded-full bg-blue-700 hover:bg-blue-400 duration-300"
              >
                Try MetaLabs Experience Now
              </Link>
            </div>

            <div className="bg-black flex justify-center">
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

        <h2 id="wim-hof" className="w-screen h-screen">
          Wim Hof Method
        </h2>
      </div>
    </article>
  );
};

export default Resources;
