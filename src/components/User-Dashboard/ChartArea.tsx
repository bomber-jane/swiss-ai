'use client'
import { useState } from 'react';
import TradingChart from './TradingChart';

const ChartArea: React.FC = () => {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="flex flex-col bg-gray-900 text-white h-full p-4">
      {/* Toolbar */}
      <div className="flex items-center space-x-2 mb-4">
        <button className="bg-gray-800 text-xs px-3 py-1 rounded">1m</button>
        <button className="bg-gray-800 text-xs px-3 py-1 rounded">5m</button>
        <button className="bg-gray-800 text-xs px-3 py-1 rounded">Indicators</button>
        <button className="bg-gray-800 text-xs px-3 py-1 rounded">Save</button>
      </div>

      {/* Trading Chart */}
      <div className="flex-1 bg-black rounded mb-4 relative">
        <TradingChart />
      </div>

      {/* Order Tabs */}
      <div className="flex justify-around text-sm border-b border-gray-700 mb-2">
        {["open", "pending", "closed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Order Content */}
      <div className="flex items-center justify-center flex-1 text-gray-500">
        {activeTab === "open" && <p>No open orders</p>}
        {activeTab === "pending" && <p>No pending orders</p>}
        {activeTab === "closed" && <p>No closed orders</p>}
      </div>

      {/* Account Summary */}
      <div className="flex justify-between text-xs text-gray-400 mt-4">
        <div>Equity: <span className="text-white">499.90 USD</span></div>
        <div>Free Margin: <span className="text-white">499.90 USD</span></div>
        <div>Balance: <span className="text-white">499.90 USD</span></div>
        <div>Margin: <span className="text-white">0.00 USD</span></div>
        <div>Margin level: <span className="text-white">-</span></div>
      </div>
    </div>
  );
};

export default ChartArea;
