// import Image from "next/image";
// import Link from "next/link";
import { ConnectWalletButton } from "@/components/UniSwapButton";
import ConditionalDashboard from "@/components/dashboard";

export default function LDV() {
  
    return (
        <main className="flex min-h-screen flex-col items-center pt-24 gap-4">
            
          <h1 className="text-2xl p-4">LDV Tokens</h1>
          <ConditionalDashboard />
          <ConnectWalletButton />
          
          


          
        </main>
    );
  }
  