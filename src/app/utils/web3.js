import { ethers } from "ethers";

const LDV_TOKEN_ADDRESS = "0x302cC16165B3AE82643aC62a8b77bA48b1f03fe1"; // Replace with actual address
const LDV_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
];

export const getProvider = () => {
  if (typeof window !== "undefined" && window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  }
  return null;
};

export const getLDVContract = async () => {
  const provider = getProvider();
  if (!provider) throw new Error("Ethereum provider not found");
  const signer = await provider.getSigner();
  return new ethers.Contract(LDV_TOKEN_ADDRESS, LDV_ABI, signer);
};
