'use client'
import Image from "next/image";
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        const handleScroll = () => {
            window.addEventListener("scroll", () => {
                const floater = document.getElementById("floater");
                const scrollPosition = window.scrollY;
                const halfViewpointHeight = window.innerHeight / 2;
            
                if (floater) {
                    scrollPosition > halfViewpointHeight ? floater.classList.add("fade-out") : floater.classList.remove("fade-out");
              }
            });
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    

    return (
        <a href="#contrast" id="floater" className="w-full flex justify-center items-center h-full"><h1 className="text-center bg-gray-800 bg-opacity-30 text-gray-200 w-4/5 lg:w-[41.6%] rounded-xl py-2 float blurry flex justify-around"><Image src="/doubledown.svg" height="26" width="26" alt="doubledown" />Resources<Image src="/doubledown.svg" height="26" width="26" alt="doubledown" /></h1></a>

    )
}

export default Banner;