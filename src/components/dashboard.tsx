// components/ConditionalRenderer.tsx
"use client";

import { useWallet } from "@/lib/WalletContext";
import ColdPlungeChart from "./chart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { formatAddress } from "../lib/utils";

export default function ConditionalDashboard() {
  const { account } = useWallet();

  const userVisitData = [
    { date: "2024-06-01", visits: 1 },
    { date: "2024-06-02", visits: 0 },
    { date: "2024-06-03", visits: 2 },
    { date: "2024-06-04", visits: 1 },
    { date: "2024-06-05", visits: 0 },
    { date: "2024-06-06", visits: 1 },
    { date: "2024-06-07", visits: 1 },
  ];

  // A simple utility to get a dynamic greeting based on the time of day
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    };


  const Dashboard = () => {
    const greeting = getGreeting();

    const totalVisits = userVisitData.reduce((acc, curr) => acc + curr.visits, 0);
    const totalPlungeMinutes = totalVisits * 30;

    
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md min-h-screen flex flex-col">
      {/* Dashboard Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {greeting}!
          </h1>
          <p className="text-gray-600">Welcome to your dashboard. Heres a quick overview.</p>
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
            <span className="font-medium text-gray-700">{formatAddress(account)}</span>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content Grid */}
      <main className="flex flex-col gap-6 flex-grow">
        {/* Cold Plunge Chart Component */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Cold Plunge Activity</h2>
          <ColdPlungeChart data={userVisitData} />
        </div>

        <div className="flex w-full justify-center gap-6">

        {/* Another Dashboard Card Example */}
        <div className="bg-white p-4 flex-grow rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-gray-600">No events scheduled for today.</p>
          {/* You could add a list of events here */}
        </div>

        {/* Another Dashboard Card Example */}
        <div className="bg-white p-4 flex-grow rounded-lg shadow ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm text-blue-700">Total Visits</p>
              <p className="text-2xl font-bold text-blue-900">{totalVisits}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-md text-center">
              <p className="text-sm text-green-700">Total plunge minutes</p>
              <p className="text-2xl font-bold text-green-900">{totalPlungeMinutes}</p>
            </div>
          </div>
        </div>

        </div>

        {/* This is where your original "another div that becomes a dashboard" could go */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h2>
          <p className="text-gray-600">
            This section can host more complex components or a summary of other data points relevant
            to the users dashboard.
          </p>
          {/* You could embed other components here, like a recent activity feed or quick links */}
        </div>
      </main>

      {/* Dashboard Footer (Optional) */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} MetaLabs. All rights reserved.</p>
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
