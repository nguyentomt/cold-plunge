// components/ConditionalRenderer.tsx
"use client";

import { useWallet } from "@/lib/WalletContext";
import { useState, useEffect } from "react";
import ColdPlungeChart from "./chart";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { formatAddress, getEthBalance, getLDVBalanceSafe } from "../lib/utils";

export default function ConditionalDashboard() {
  const { account } = useWallet();
  const [eth, setEth] = useState<string | null>(null);
  const [ldv, setLdv] = useState<string | null>(null);

  useEffect(() => {
    if (account) {
      getEthBalance(account).then(setEth).catch(console.error);
      getLDVBalanceSafe(account).then(setLdv).catch(console.error);
    }
  }, [account]);

  function getLast7Days() {
    const fixedVisits = [0, 2, 1, 3, 1, 0, 1]; // hard-coded visits
    const result = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);

      const dateStr = day.toISOString().split("T")[0]; // YYYY-MM-DD format

      result.push({
        date: dateStr,
        visits: fixedVisits[6 - i], // match visits with each day
      });
    }

    return result;
  }
  const userVisitData = getLast7Days();

  // A simple utility to get a dynamic greeting based on the time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const Dashboard = () => {
    const greeting = getGreeting();
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => setOpen(false);
    const handleTooltipOpen = () => setOpen(true);

    const totalVisits = userVisitData.reduce(
      (acc, curr) => acc + curr.visits,
      0
    );
    const totalPlungeMinutes = totalVisits * 30;

    return (
      <div className="bg-gray-50 p-6 rounded-lg shadow-md min-h-screen flex flex-col">
        {/* Dashboard Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{greeting}!</h1>
            <p className="text-gray-600">
              Welcome to your dashboard. Heres a quick overview.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Example: User Profile/Settings/Notifications */}
            <button className="text-gray-500 hover:text-gray-700">
              <NotificationsIcon />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <SettingsIcon />
            </button>
            <div className="flex items-center space-x-2">
              <AccountCircleIcon className="text-blue-500" />
              <span className="font-medium text-gray-700">
                {formatAddress(account)}
              </span>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content Grid */}
        <main className="flex flex-col gap-6 flex-grow">
          {/* Cold Plunge Chart Component */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cold Plunge Activity
            </h2>
            <ColdPlungeChart data={userVisitData} />
          </div>

          <div className="flex w-full justify-center gap-6">
            {/* Another Dashboard Card Example */}
            <div className="bg-white p-4 flex-grow rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600">No events scheduled for today.</p>
              {/* You could add a list of events here */}
            </div>

            {/* Another Dashboard Card Example */}
            <div className="bg-white p-4 flex-grow rounded-lg shadow ">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Stats
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-sm text-blue-700">Total Visits</p>
                  <p className="text-2xl font-bold text-blue-900">
                    {totalVisits}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-md text-center">
                  <p className="text-sm text-green-700">Total plunge minutes</p>
                  <p className="text-2xl font-bold text-green-900">
                    {totalPlungeMinutes}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* This is where your original "another div that becomes a dashboard" could go */}

          <Accordion
            key={1}
            sx={{
              backgroundColor: "#fff",
              color: "#1f2937",
              marginBottom: "8px",
              "&:before": {
                display: "none",
              },
              "& .MuiAccordionSummary-root": {
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1f2937" }} />}
              aria-controls={`panel${1}-content`}
              id={`panel${1}-header`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">
                  Balance Information ⚖️
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#f9fafb",
                color: "#1f2937",
              }}
            >
              <div className="mb-2">
                <p className="text-gray-500 text-sm">ETH Balance</p>
                <p className="text-gray-800 font-medium text-lg">
                  {eth ?? "Loading..."}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-500 text-sm">LDV Token Balance</p>
                <p className="text-gray-800 font-medium text-lg">
                  {ldv ?? "Loading..."}
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-green-100 col-span-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  My LDV Credit
                </h2>

                <div className="text-3xl font-bold text-green-600 mb-4">
                  112.3 LDV
                </div>

                <Grid>
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                      <Tooltip
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        placement="top"
                        title="Send LDV action here - this feature still in beta"
                        slotProps={{
                          popper: {
                            disablePortal: true,
                          },
                        }}
                      >
                        <Button
                          className="w-full py-2 px-4 hover:bg-[#969696] text-white font-semibold rounded-lg transition-all duration-200 shadow-md"
                          onClick={handleTooltipOpen}
                          sx={{ backgroundColor: "#696969", color: "white" }}
                        >
                          🎯 Get my LDV
                        </Button>
                      </Tooltip>
                    </div>
                  </ClickAwayListener>
                </Grid>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* You could embed other components here, like a recent activity feed or quick links */}
        </main>

        {/* Dashboard Footer (Optional) */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MetaLabs. All rights reserved.
          </p>
        </footer>
      </div>
    );
  };

  const Nothing = () => {
    return (
      <div className="bg-green-500 text-transparent w-0 h-0">
        You found a hidden message!
      </div>
    );
  };

  if (account) {
    return <Dashboard />;
  }

  return <Nothing />;
}
