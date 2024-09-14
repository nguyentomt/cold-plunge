"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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
    { src: "/1.jpg" },
    { src: "/2.jpg" },
    { src: "/3.jpg" },
    { src: "/4.jpg" },
    { src: "/5.jpg" },
    { src: "/6.jpg" },
    { src: "/7.jpg" },
    { src: "/8.jpg" },
    { src: "/9.jpg" },
    { src: "/10.jpg" },
    { src: "/11.jpg" },
  ];

  return (
    <div className="flex flex-row w-screen items-center justify-center gap-0 overscroll-x-auto md:pt-20">
      <article
        className="w-screen h-screen pt-[4.5rem] md:pt-0 md:h-full flex flex-col items-center"
        style={{  aspectRatio: "3 / 2" }}
      >
        {/* <button
          className="text-xl hidden md:block bg-gradient-to-br rounded-full from-purple-900 to-blue-400 transition duration-300 opacity-60 hover:opacity-100 leading-loose px-5 my-1"
          onClick={() => setOpen(true)}
        >
          Theater Mode
        </button> */}

        <Lightbox plugins={[Inline, Thumbnails, Captions]} slides={pictures} />
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
    </div>
  );
};

export default Gallery;
