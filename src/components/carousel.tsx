'use client'
// import the hook and options type
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import Dots from './dots';
import CarouselControls from './carouselControls';
import Image from 'next/image';


// define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const length = React.Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();

    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }


        emblaApi?.on("select", selectHandler);
        return () => {
            emblaApi?.off("select", selectHandler);
        };
    }, [emblaApi]);

  

  return (
            <div className="embla" ref={emblaRef}>
                <div className="flex embla__container">{children}</div>
                <CarouselControls
                    canScrollNext={canScrollNext}
                    canScrollPrev={canScrollPrev}
                    onNext={() => emblaApi?.scrollNext()}
                    onPrev={() => emblaApi?.scrollPrev()}
                />
                
                <Dots itemsLength={length} selectedIndex={selectedIndex} />
            </div>
  )
}

export default Carousel;