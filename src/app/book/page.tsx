'use client'
import Image from "next/image";
import PaymentButton from "@/components/PaymentButton";
import { ConnectWalletButton } from "@/components/MetamaskButton";

const Booking = () => {

    const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };
  
    return (
        <section className="w-screen flex flex-col justify-center items-center pt-24 md:pt-28">
            
            <iframe src="https://booking.mangomint.com/metalabscoldplungesauna" title="Cold plunge booking form by Mango Mint" className="w-[90%] h-[669px] lg:w-[469px] iframe"></iframe>

            <div className="flex gap-4 px-6 my-12">
                <ConnectWalletButton />
            </div>
            
            {/* <div className="py-12">
                <PaymentButton  />
            </div> */}
        </section>
    )
    
  }

export default Booking;