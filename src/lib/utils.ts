import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ethers } from "ethers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatAddress = (address?: string | null): string => {
  if (!address) return "";
  return `${address.slice(0, 8)}...`;
}

export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};


export async function getEthBalance(account: string) {
  const provider = new ethers.BrowserProvider(window.ethereum as any);
  const balance = await provider.getBalance(account);
  return ethers.formatEther(balance);
}


const NEXT_PUBLIC_LDV_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_LDV_TOKEN_ADDRESS!;
const LDV_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

export async function getLDVBalanceSafe(account?: string): Promise<string | null> {
  if (!account || !NEXT_PUBLIC_LDV_TOKEN_ADDRESS) {
    console.warn("LDV balance fetch skipped: missing account or token address.");
    return null;
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum as any);
    const contract = new ethers.Contract(NEXT_PUBLIC_LDV_TOKEN_ADDRESS, LDV_ABI, provider);

    const [rawBalance, decimals] = await Promise.all([
      contract.balanceOf(account),
      contract.decimals()
    ]);

    return ethers.formatUnits(rawBalance, decimals);
  } catch (err) {
    console.error("Error fetching LDV balance:", err);
    return null;
  }
}