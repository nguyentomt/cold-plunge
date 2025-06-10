"use client";

import { useState } from "react";
import { ethers } from "ethers";



const LDV_PAYMENT_CONTRACT = "0x302cC16165B3AE82643aC62a8b77bA48b1f03fe1"; // Replace with your deployed contract
const LDV_TOKEN_ADDRESS = process.env.LDV_TOKEN_ADDRESS!;; // Replace with your LDV token address

const PaymentButton = () => {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkAllowanceAndBalance = async (signer: ethers.Signer, amountInWei: bigint) => {
    const tokenContract = new ethers.Contract(LDV_TOKEN_ADDRESS, [
      "function balanceOf(address) view returns (uint256)",
      "function allowance(address,address) view returns (uint256)"
    ], signer);
    
    const address = await signer.getAddress();
    const balance = await tokenContract.balanceOf(address);
    const allowance = await tokenContract.allowance(address, LDV_PAYMENT_CONTRACT);
    
    if (balance < amountInWei) throw new Error("Insufficient balance");
    if (allowance < amountInWei) throw new Error("Please approve token spend first");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const payWithLDV = async () => {
    try {
      setIsLoading(true);
      if (!window.ethereum) throw new Error("MetaMask not detected");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const amountInWei = ethers.parseUnits(amount, 2);
      
      await checkAllowanceAndBalance(signer, amountInWei);
      
      const contract = new ethers.Contract(LDV_PAYMENT_CONTRACT, ["function payWithLDV(uint256)"], signer);
      const tx = await contract.payWithLDV(amountInWei);
      await tx.wait();
      
      alert("Payment successful!");
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Payment failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleChange}
        disabled={isLoading}
        className="border p-2 rounded text-gray-800"
      />
      <button 
        onClick={payWithLDV} 
        disabled={!amount || isLoading} 
        className="ml-2 p-2 hover:cursor-pointer bg-blue-500 text-white rounded"
      >
        {isLoading ? 'Processing...' : 'Pay with LDV'}
      </button>
    </div>
  );
};

export default PaymentButton;
