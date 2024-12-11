"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";
import {
  Captions,
  Thumbnails,
  Inline,
  Slideshow,
  Counter,
  Fullscreen,
  Download,
  Share,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);

  const pictures = [
    // { src: "/1.jpg", title: "Lounge", description: "Description 1" },
    { src: "/8.jpg", title: "Baths", description: "Our 37° and 44° baths, with sauna, shower, and changing rooms in background" },
    { src: "/9.jpg" },
    { src: "/10.jpg" },
    { src: "/11.jpg" },
    { src: "/1.jpg" },
    { src: "/2.jpg" },
    { src: "/3.jpg" },
    { src: "/4.jpg" },
    { src: "/5.jpg" },
    { src: "/7.jpg" },
    { src: "/6.jpg" },
  ];

  return (
    <div className="flex flex-col w-screen items-center justify-center gap-0 overscroll-x-auto lg:pt-28 z-50">
      <article
        className="w-screen h-screen lg:w-3/4 pt-[6.5rem] lg:pt-0 lg:h-full flex flex-col items-center"
        style={{  aspectRatio: "3 / 2" }}
      >
        {/* <button
          className="text-xl hidden md:block bg-gradient-to-br rounded-full from-purple-900 to-blue-400 transition duration-300 opacity-60 hover:opacity-100 leading-loose px-5 my-1"
          onClick={() => setOpen(true)}
        >
          Theater Mode
        </button> */}

        <Lightbox plugins={[Inline, Thumbnails, Fullscreen, Counter, Share, Zoom, Captions]} slides={pictures} />
      </article>
      {/* <Lightbox
        plugins={[
          Captions,
          Thumbnails,
          Slideshow,
          Counter,
          Fullscreen,
          Download,
          Share,
          Zoom,
        ]}
        open={open}
        close={() => setOpen(false)}
        slides={pictures}
      /> */}

<Link href="/book" className="z-10 my-4 lg:hidden book-shadow font-bold text-gray-900 text-center py-4 px-8 text-4xl  bg-gray-50 bg-opacity-60 hover:bg-opacity-90 rounded-3xl border border-gray-500">
        Book Now
      </Link>
    </div>
  );
};

export default Gallery;
