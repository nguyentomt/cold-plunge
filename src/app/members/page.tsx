import Link from "next/link";

const Members = () => {
  const videos = [
    {
      member: "Trevor Duncan",
      src: "https://www.youtube.com/embed/4y-FQyo73I8?si=xNMgEsvol0x64lRU",
    },
    {
      member: "Dave Dove",
      src: "https://www.youtube.com/embed/_hbGNG4dQck?si=cqYehJcS3zo9_Ewi",
    },
    {
      member: "Charles Khuc",
      src: "https://www.youtube.com/embed/tqP7yxcuJD0?si=s15-5tbvRYyBqkkf",
    },
    {
      member: "Chris Chacon",
      src: "https://www.youtube.com/embed/flttjXo5RUE?si=DVzZ0syBZ9C5TOoV",
    },
    {
      member: "Arron Li",
      src: "https://www.youtube.com/embed/1dRThNrsGz0?si=INXLM8uhqLPdelTK",
    },
    {
      member: "Rick Lara",
      src: "https://www.youtube.com/embed/X45lN3U9ojE?si=IcLkSl-zCZsao53D",
    },
    {
      member: "Nick Connolly",
      src: "https://www.youtube.com/embed/FOl26kNnc-Q?si=NJTsu86ns-BTqOLY",
    },
    {
      member: "Adam Hess",
      src: "https://www.youtube.com/embed/GdSABVbDFnE?si=fjES6S-LqQQLME61",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row lg:flex-wrap gap-8 w-screen items-center justify-center pt-32 lg:pt-40 pb-16">
      {videos.map((vid) => {
        return (
          <div className="object-fit flex justify-center w-full lg:w-1/4">
            <iframe
              src={vid.src}
              className="w-[80%] h-48 rounded-3xl bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        );
      })}

    <Link href="/book" className="z-10 lg:hidden book-shadow font-bold text-gray-900 text-center py-4 px-8 text-4xl  bg-gray-50 bg-opacity-60 hover:bg-opacity-90 rounded-3xl border border-gray-500">
        Book Now
      </Link>
    </section>
  );
};

export default Members;
