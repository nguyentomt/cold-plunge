'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'




export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true })


  const ContrastTherapy = () => {
    return (
        <div className="pb-8 bg-gray-100 rounded-xl">
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
    )
  }

  const slides = [ 
    <ContrastTherapy />
  ]

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, i) => {
            return (
                <div className="w-full" key={i}>
                {slide}
                </div>
            )
})}
      </div>
    </div>
  )
}
