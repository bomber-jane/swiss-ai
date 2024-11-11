'use client'
import { useEffect, useState } from 'react';

interface Instrument {
  symbol: string;
  bid: number;
  ask: number;
  direction: "up" | "down";
}

const mockForexData: Instrument[] = [
  { symbol: "BTC", bid: 66879.5, ask: 66890, direction: "up"},
  { symbol: "XAU/USD", bid: 2747.023, ask: 2749.5, direction: "down"},
  { symbol: "AAPL", bid: 231.41, ask: 231.5, direction: "up"},
  { symbol: "EUR/USD", bid: 1.07953, ask: 1.0798, direction: "down"},
  { symbol: "GBP/USD", bid: 1.29609, ask: 1.2963, direction: "up"},
];

const Sidebar: React.FC = () => {
  const [instruments, setInstruments] = useState(mockForexData);

  const updateMockData = () => {
    setInstruments((prevInstruments) =>
      prevInstruments.map((instrument) => {
        const change = (Math.random() * 0.0004 - 0.0002) * instrument.bid;
        const newBid = instrument.bid + change;
        const newAsk = newBid + 0.0003;

        return {
          ...instrument,
          bid: parseFloat(newBid.toFixed(5)),
          ask: parseFloat(newAsk.toFixed(5)),
          direction: change > 0 ? "up" : "down",
        };
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(updateMockData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[360px] bg-gray-900 text-white h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-sm">INSTRUMENTS</span>
        <button className="text-gray-400 hover:text-gray-300">×</button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 bg-gray-800 rounded text-sm focus:outline-none"
        />
      </div>

      {/* Favorites Dropdown */}
      <div className="mb-4">
        <select className="w-full px-2 py-1 bg-gray-800 rounded text-sm">
          <option>Favorites</option>
          <option>Popular Pairs</option>
          <option>Stocks</option>
        </select>
      </div>

      {/* Instruments List */}
      <div className="space-y-2">
        {instruments.map((instrument, index) => (
          <div key={index} className="flex items-center justify-between text-sm py-1 px-2 bg-gray-800 rounded hover:bg-gray-700">
            <div className="flex items-center space-x-2">
              {/* Symbol and Icon */}
              <span className="text-lg">•</span> {/* Placeholder for icons */}
              <span className="font-bold">{instrument.symbol}</span>
              <span
                className={`text-xs ${
                  instrument.direction === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {instrument.direction === "up" ? "↑" : "↓"}
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="text-green-400 font-semibold">{instrument.bid.toFixed(5)}</span>
              <span className="text-red-400 font-semibold">{instrument.ask.toFixed(5)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
