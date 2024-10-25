import Link from "next/link";

const Experience = () => {
  return (
    <article className="flex flex-col gap-4 items-center pt-24 lg:pt-32 w-screen overflow-clip">
      <div className="w-4/5 lg:w-1/3">
        <div className="w-full bg-gray-100 lg:text-xl p-4 rounded-3xl text-gray-800 text-justify">
        Meta labs is a communal space built for members to train, learn and share their experiences of basic hot and cold practices and their respective effects on the human body. We believe this knowledge is every man’s responsibility to behold, and insodoing, we could together better the health of our communities all the while supporting our government to curb today’s fast growing mental crisis. We welcome you to join our family of wellness enthusiasts on our journey of work, knowledge, and better mental awareness today.
        <div className="pt-4 text-red-500 font-bold">Click here to schedule your visit.</div>

        </div>

        {/* <h1>Experience</h1>
        <section className="py-4 flex flex-col md:flex-row-reverse">
          <div className="md:w-2/3">
            <h2 id="dunk">Slam Dunk</h2>
            <p className="text-justify text-lg pb-8">
              This offering gives you a single tub 15min session, Your choice of
              either 50 degrees tub, 45 degrees, or 37 degrees tub. Does not
              include the Meta Labs Experience. Please bring a towel, a clean
              body, and on top of that an open mind. We recommend giving
              yourself at least 10mins prior to your appt if you need a deep
              cleanse/shower/rinse as a courtesy to all our other members.
            </p>

            <h2 id="hotcold" className="">
              Meta Labs Experience (Hot + Cold)
            </h2>
          </div>

          <div className="w-[110%] md:w-1/3">
            <video
              width=""
              height=""
              muted
              autoPlay
              loop
              playsInline
              className="pr-8 object-cover w-screen" 
              style={{ aspectRatio: 9/16 }}
            >
              <source src="/lofilab.mp4" type="video/mp4" />
            </video>
          </div>
        </section> */}
      </div>
      <Link href="/book" className="z-10 lg:hidden book-shadow font-bold text-gray-900 text-center py-4 px-8 text-4xl  bg-gray-50 bg-opacity-60 hover:bg-opacity-90 rounded-3xl border border-gray-500">
        Book Now
      </Link>
    </article>
  );
};

export default Experience;
