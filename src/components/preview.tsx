import Image from "next/image";
import Link from "next/link";
import { SignIn } from "./sign-in";



export default function Preview() {
  return (
    <section className="">
      <div className="h-screen flex flex-col items-center">
        <div id="video-container" className="relative w-screen h-screen">
          {/* <video
            width="100%"
            muted
            autoPlay
            loop
            playsInline
            className="-z-1 w-[100vw] h-[100vh] opacity-70 inset-0 absolute object-cover "
          >
            <source src="/lofilab.mp4" type="video/mp4" />
          </video> */}
          <Image src="/9.jpg" width="1024" height="669" className="absolute object-cover h-screen md:w-screen" alt="Meta Labs Logo" />
          <div className="absolute w-screen">
            
            <div className="flex flex-col gap-2 items-center justify-center pt-32 w-screen">
            <h1 className="shadow text-border text-4xl p-4">Cold Plunge & Sauna in Huntington Beach</h1>
            <p className="text-border text-2xl w-1/2 text-center">Unlock the power of contrast therapy.</p>
            <p className="text-border text-2xl w-1/2 text-center">Recover faster, feel stronger.</p>

              {/* <Image
                src="/metalabs-logo.svg"
                width="169"
                height="169"
                alt="MetaLabs Logo"
                className="absolute"
              /> */}
            </div>
          </div>

          {/* <p className="w-screen absolute top-1/2 text-center z-20 italic opacity-20">
            Take the Plunge
          </p> */}
          <div className="absolute w-screen top-3/4">
            <div className="flex flex-col gap-4 items-center">
              {/* <SignIn /> */}
              <Link
                href="/book"
                className="hover:bg-transparent hover:text-white w-36 text-center leading-loose px-4 rounded-full border-2 border-white transition duration-300 bg-white text-black"
              >
                Cold Plunge
              </Link>
            </div>
          </div>

          <div className="flex w-screen h-screen items-end justify-center gap-4 p-4 text-sm">
            <Link href="/terms"><div id="terms" className="z-10 opacity-0 hover:opacity-70 hover:cursor-pointer transition duration-300">Terms of Service</div></Link>
            <Link href="/privacy"><div id="privacy" className="z-10 opacity-0 hover:opacity-70 hover:cursor-pointer transition duration-300">Privacy Policy</div></Link>
          </div>
        </div>

        
      </div>
    </section>
  );
}
