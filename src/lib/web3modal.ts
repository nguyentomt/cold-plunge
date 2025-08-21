// lib/web3modal.ts
"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = process.env.NEXT_PUBLIC_REOWN_ID!; //  for WalletConnect UI
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID!;

const metadata = {
  name: "Meta Labs Cold Plunge",
  description: "Cold Plunge Contrast Therapy in Huntington Beach, CA",
  url: "https://cold-plunge-metalabs.vercel.app/",
  icons: ["/plunge-drop.jpg"],
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
});

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: `https://mainnet.infura.io/v3/${infuraId}`, // or Alchemy/Ankr/etc
};

const sepolia = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: `https://sepolia.infura.io/v3/${infuraId}`, // or Alchemy/Ankr/etc
};

createWeb3Modal({
  ethersConfig,
  chains: [sepolia],
  projectId,
});
