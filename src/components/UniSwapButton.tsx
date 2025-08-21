// components/ConnectWalletButton.tsx
"use client";

import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button, Popover, Typography } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import { useState, useEffect } from "react";
import { formatAddress } from "../lib/utils";

export const ConnectWalletButton = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  
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
      await open();
    } catch (err) {
      console.warn("Connection failed:", err);
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("walletconnect");
    }
    // WalletConnect v2 disconnect isn't exposed yet via web3modal/ethers,
    // so just refresh for now to simulate disconnect
    window.location.reload();
  };

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? "wallet-popover" : undefined;

  return (
    <div>
      {address ? (
        <>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
            sx={{ backgroundColor: '#403e3e'}}
          >
            {formatAddress(address)}
          </Button>
          <Popover
            id={id}
            open={popoverOpen}
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
  )
};
