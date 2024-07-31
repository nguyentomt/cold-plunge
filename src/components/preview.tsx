import Image from "next/image";
import Link from "next/link";
// import { SignIn } from "./sign-in";



export default function Preview() {
  return (
    <section className="">
      <div className="h-screen flex flex-col items-center">
        <div id="video-container" className="relative w-screen h-screen">
          <video
            src="/meta-promo.mp4"
            autoPlay
            muted
            loop
            className="-z-1 w-[100vw] h-[100vh] opacity-70 inset-0 absolute object-cover "
          />
          <div className="absolute w-screen">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/metalabs-logo.svg"
                width="420"
                height="420"
                alt="MetaLabs Logo"
                className="absolute"
              />
            </div>
          </div>

          <p className="w-screen absolute top-1/2 text-center z-20 italic opacity-20">
            Take the Plunge
          </p>
          <div className="absolute w-screen top-3/4">
            <div className="flex flex-col gap-4 items-center">
              {/* <SignIn /> */}
              <Link
                href="/book"
                className="bg-transparent w-36 text-center leading-loose px-4 rounded-full border-2 border-white transition duration-300 hover:bg-white hover:text-black"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="flex w-screen h-screen items-end justify-center gap-4 p-4 text-sm">
            <Link href="/terms"><div id="terms" className="z-10 opacity-30 hover:opacity-70 hover:cursor-pointer transition duration-300">Terms of Service</div></Link>
            <Link href="/privacy"><div id="privacy" className="z-10 opacity-30 hover:opacity-70 hover:cursor-pointer transition duration-300">Privacy Policy</div></Link>
          </div>
        </div>

        
      </div>
    </section>
  );
}
