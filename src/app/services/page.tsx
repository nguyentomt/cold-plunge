'use client'
import { Map } from "@/components/map";
import { useState } from "react";

const Location = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

    return (
      <article className="flex flex-col gap-4 items-center text-lg w-full pt-24 lg:pt-28 text-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106197.81309214969!2d-118.15205920273439!3d33.7171854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27e38dcc6079%3A0x3be5ba8928f9b108!2sMeta%20Labs%20Cold%20Plunge!5e0!3m2!1sen!2sus!4v1719851470721!5m2!1sen!2sus"
          className="w-screen lg:w-[669px] h-[469px]"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

        {/* <Map setMap={setMap} /> */}
        <div className="flex gap-8 justify-center p-4"><a href="tel:7146586379">📞  714 658 6379</a>
        <p>⌛ 9am-7pm</p></div>


        <div>
          
          <div className="flex gap-8 justify-center p-4">
            <a href="https://www.yelp.com/biz/meta-labs-cold-plunge-huntington-beach" target="_new"><svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-red-600" viewBox="0 0 384 512"><path d="M42.9 240.3l99.6 48.6c19.2 9.4 16.2 37.5-4.5 42.7L30.5 358.5a22.8 22.8 0 0 1 -28.2-19.6 197.2 197.2 0 0 1 9-85.3 22.8 22.8 0 0 1 31.6-13.2zm44 239.3a199.5 199.5 0 0 0 79.4 32.1A22.8 22.8 0 0 0 192.9 490l3.9-110.8c.7-21.3-25.5-31.9-39.8-16.1l-74.2 82.4a22.8 22.8 0 0 0 4.1 34.1zm145.3-109.9l58.8 94a22.9 22.9 0 0 0 34 5.5 198.4 198.4 0 0 0 52.7-67.6A23 23 0 0 0 364.2 370l-105.4-34.3c-20.3-6.5-37.8 15.8-26.5 33.9zm148.3-132.2a197.4 197.4 0 0 0 -50.4-69.3 22.9 22.9 0 0 0 -34 4.4l-62 91.9c-11.9 17.7 4.7 40.6 25.2 34.7L366 268.6a23 23 0 0 0 14.6-31.2zM62.1 30.2a22.9 22.9 0 0 0 -9.9 32l104.1 180.4c11.7 20.2 42.6 11.9 42.6-11.4V22.9a22.7 22.7 0 0 0 -24.5-22.8 320.4 320.4 0 0 0 -112.3 30.1z"/></svg></a>
            <a href="https://search.google.com/local/reviews?placeid=ChIJeWDMjeMn3YARCLH5KIm65Ts&q=Meta+Labs+Cold+Plunge&hl=en&gl=US" target="_new"><svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-blue-100" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></a>
          </div>

          <p className="p-4">Thanks for the love on Yelp/Google!</p>

        </div>
      </article>
    );
  };

  export default Location;