export {};

declare global {
  interface Window {
    ethereum?: any; // MetaMask injects this object
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}
