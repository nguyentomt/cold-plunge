"use client";
import { Button, Popover, Typography } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { formatAddress } from "../lib/utils";

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    sdk?.terminate();
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "wallet-popover" : undefined;

  return (
    <div>
      {connected ? (
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
