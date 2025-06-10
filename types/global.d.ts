export {};

declare global {
  interface Window {
    ethereum?: any; // MetaMask injects this object
  }
}
