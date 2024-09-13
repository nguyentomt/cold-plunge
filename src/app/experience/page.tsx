const Experience = () => {
  return (
    <article className="flex flex-col gap-4 items-center pt-24 text-border w-screen overflow-clip">
      <div className="w-4/5">
        <h1>Experience</h1>

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
        </section>
      </div>
    </article>
  );
};

export default Experience;
