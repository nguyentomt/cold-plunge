'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface VideoProps {
    member: string;
    id: string;
    src: string;
}

const Members = () => {
  const [selectedVid, setSelectedVid] = useState<VideoProps | null>(null);

  const openModal = (video: VideoProps) => setSelectedVid(video);
  const closeModal = () => setSelectedVid(null);

  const videos = [
    {
      member: "Trevor Duncan",
      id: "4y-FQyo73I8",
      src: "https://www.youtube.com/embed/4y-FQyo73I8?si=xNMgEsvol0x64lRU",
    },
    {
      member: "Dave Dove",
      id: "_hbGNG4dQck",
      src: "https://www.youtube.com/embed/_hbGNG4dQck?si=cqYehJcS3zo9_Ewi",
    },
    {
      member: "Charles Khuc",
      id: "tqP7yxcuJD0",
      src: "https://www.youtube.com/embed/tqP7yxcuJD0?si=s15-5tbvRYyBqkkf",
    },
    {
      member: "Chris Chacon",
      id: "flttjXo5RUE",
      src: "https://www.youtube.com/embed/flttjXo5RUE?si=DVzZ0syBZ9C5TOoV",
    },
    {
      member: "Arron Li",
      id: "1dRThNrsGz0",
      src: "https://www.youtube.com/embed/1dRThNrsGz0?si=INXLM8uhqLPdelTK",
    },
    {
      member: "Rick Lara",
      id: "X45lN3U9ojE",
      src: "https://www.youtube.com/embed/X45lN3U9ojE?si=IcLkSl-zCZsao53D",
    },
    {
      member: "Nick Connolly",
      id: "FOl26kNnc-Q",
      src: "https://www.youtube.com/embed/FOl26kNnc-Q?si=NJTsu86ns-BTqOLY",
    },
    {
      member: "Adam Hess",
      id: "GdSABVbDFnE",
      src: "https://www.youtube.com/embed/GdSABVbDFnE?si=fjES6S-LqQQLME61",
    },
    {
      member: "Ben Anda",
      id: "aibgb4R4-Bs",
      src: "https://www.youtube.com/embed/aibgb4R4-Bs?si=-ned0o2tu9Jd3jTA",
    },

    
  ];

  return (
    <section className="flex flex-col lg:flex-row lg:flex-wrap gap-8 w-screen items-center justify-center pt-32 lg:pt-40 pb-16">
      {videos.map((vid, i) => {
        return (
          <div key={i} className="object-fit flex justify-center w-full lg:w-1/4 cursor-pointer " onMouseDown={() => openModal(vid)}>
            <Image src={`https://img.youtube.com/vi/${vid.id}/0.jpg`} width="269" height="192" alt={vid.member} className="w-[80%] rounded-3xl hover:scale-105 transform transition-all duration-200"/>
          </div>
        );
      })}

    <Link href="/book" className="z-10 lg:hidden book-shadow font-bold text-gray-900 text-center py-4 px-8 text-4xl  bg-gray-50 bg-opacity-60 hover:bg-opacity-90 rounded-3xl border border-gray-500">
        Book Now
      </Link>

      {selectedVid && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onMouseDown={closeModal}>
        <div className="relative w-full h-full lg:w-[80%] lg:h-[80%] bg-black rounded-lg p-4 flex flex-col items-end">
          {/* Close button */}
          <button
            className="text-white text-2xl absolute top-2 right-4"
            onClick={closeModal}
          >
            &times;
          </button>
          {/* Embedded YouTube video */}
          <iframe
            src={`${selectedVid.src}&autoplay=1`}
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      )}
    </section>
  );
};

export default Members;
