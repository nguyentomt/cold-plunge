"use client";
import { Button, Popover, Typography } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import { ethers } from "ethers";
import { formatAddress } from "../lib/utils";
import { useState, useEffect } from "react";

export const ConnectWalletButton = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  

  

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const connect = async () => {
    try {
    setConnecting(true);

    if (!window.ethereum) {
      throw new Error("No wallet found. Please install MetaMask.");
    }

    let provider: any;

    // If multiple wallets are injected, select MetaMask
    if (Array.isArray(window.ethereum.providers)) {
      provider = window.ethereum.providers.find((p: any) => p.isMetaMask);
    } else if (window.ethereum.isMetaMask) {
      provider = window.ethereum;
    } else {
      throw new Error("MetaMask not found. Please install MetaMask.");
    }

    const ethersProvider = new ethers.BrowserProvider(provider);
    const accounts = await ethersProvider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
    } catch (err) {
      console.warn("Connection failed:", err);
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = () => {
    setAccount(null);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "wallet-popover" : undefined;

  useEffect(() => {
    const checkConnected = async () => {
      if (!window.ethereum) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_accounts", []);
      if (accounts.length > 0) setAccount(accounts[0]);
    };
    checkConnected();
  }, []);

  return (
    <div>
      {account ? (
        <>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            {formatAddress(account)}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography
              onClick={disconnect}
              sx={{ p: 2, cursor: "pointer", minWidth: 150 }}
            >
              Disconnect
            </Typography>
          </Popover>
        </>
      ) : (
        <Button disabled={connecting} onClick={connect} variant="contained" 
            sx={{ backgroundColor: '#403e3e'}}>
          <WalletIcon sx={{ mr: 1 }} />
          Connect Wallet
        </Button>
      )}
    </div>
  );
};
