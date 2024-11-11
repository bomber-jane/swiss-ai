// components/TopNavigation.tsx
import React from 'react';

const TopNavigation: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="text-xl font-bold">Swiss AI</div>

        {/* Trading Pairs */}
        <div className="flex items-center space-x-4">
          <button className="px-2 py-1 text-sm font-medium bg-gray-700 rounded">GBP/USD</button>
          <button className="px-2 py-1 text-sm font-medium bg-gray-700 rounded">BTC</button>
          <button className="px-2 py-1 text-sm font-medium bg-gray-700 rounded">XAU/USD</button>
          <button className="px-2 py-1 text-sm font-medium bg-gray-700 rounded">EUR/USD</button>
          <button className="px-2 py-1 text-sm font-medium bg-gray-700 rounded">+</button>
        </div>
      </div>

      {/* Right Section: Account Info */}
      <div className="flex items-center space-x-4">
        {/* Demo Account & Balance */}
        <div className="text-sm">
          <span className="text-green-400">DEMO</span> Standard <br />
          <span className="text-gray-400">$499.90 USD</span>
        </div>

        {/* Deposit Button */}
        <button className="px-4 py-2 text-sm font-medium bg-blue-600 rounded hover:bg-blue-500">Deposit</button>

        {/* Settings Icon */}
        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-sm">⚙️</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
