'use client'
import { useEffect, useRef } from 'react';
import {
  createChart,
  IChartApi,
  BarData,
} from 'lightweight-charts';

const LightweightChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  // Mock data for initial chart display
  const initialData: BarData[] = [
    { time: '2024-10-01', open: 1.08, high: 1.09, low: 1.07, close: 1.085 },
    { time: '2024-10-02', open: 1.085, high: 1.1, low: 1.075, close: 1.09 },
    { time: '2024-10-03', open: 1.09, high: 1.095, low: 1.08, close: 1.085 },
    { time: '2024-10-04', open: 1.085, high: 1.09, low: 1.08, close: 1.083 },
    { time: '2024-10-05', open: 1.083, high: 1.088, low: 1.08, close: 1.085 },
    { time: '2024-10-06', open: 1.085, high: 1.092, low: 1.08, close: 1.088 },
    { time: '2024-10-07', open: 1.088, high: 1.093, low: 1.085, close: 1.09 },
    { time: '2024-10-08', open: 1.09, high: 1.094, low: 1.087, close: 1.092 },
    { time: '2024-10-09', open: 1.092, high: 1.096, low: 1.09, close: 1.095 },
    { time: '2024-10-10', open: 1.095, high: 1.097, low: 1.093, close: 1.094 },
    { time: '2024-10-11', open: 1.094, high: 1.098, low: 1.09, close: 1.091 },
    { time: '2024-10-12', open: 1.091, high: 1.094, low: 1.089, close: 1.093 },
    { time: '2024-10-13', open: 1.093, high: 1.097, low: 1.09, close: 1.095 },
    { time: '2024-10-14', open: 1.095, high: 1.099, low: 1.092, close: 1.097 },
    { time: '2024-10-15', open: 1.097, high: 1.101, low: 1.095, close: 1.099 },
    { time: '2024-10-16', open: 1.099, high: 1.103, low: 1.097, close: 1.101 },
    { time: '2024-10-17', open: 1.101, high: 1.105, low: 1.098, close: 1.103 },
    { time: '2024-10-18', open: 1.103, high: 1.108, low: 1.1, close: 1.106 },
    { time: '2024-10-19', open: 1.106, high: 1.109, low: 1.102, close: 1.104 },
    { time: '2024-10-20', open: 1.104, high: 1.107, low: 1.101, close: 1.105 },
    { time: '2024-10-21', open: 1.105, high: 1.108, low: 1.102, close: 1.107 },
    { time: '2024-10-22', open: 1.107, high: 1.11, low: 1.105, close: 1.109 },
    { time: '2024-10-23', open: 1.109, high: 1.112, low: 1.106, close: 1.111 },
    { time: '2024-10-24', open: 1.111, high: 1.113, low: 1.108, close: 1.112 },
    { time: '2024-10-25', open: 1.112, high: 1.115, low: 1.11, close: 1.113 },
    { time: '2024-10-26', open: 1.113, high: 1.116, low: 1.111, close: 1.115 },
    { time: '2024-10-27', open: 1.115, high: 1.117, low: 1.113, close: 1.116 },
    { time: '2024-10-28', open: 1.116, high: 1.119, low: 1.114, close: 1.118 },
    { time: '2024-10-29', open: 1.118, high: 1.12, low: 1.116, close: 1.117 },
  ];
  

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 300,
        layout: {
          background: {  color: '#000000' },
          textColor: '#d1d4dc',
        },
        grid: {
          vertLines: { color: '#333333' },
          horzLines: { color: '#333333' },
        },
        crosshair: {
          mode: 1,
        },
        timeScale: {
          borderColor: '#555555',
        },
      });

      chartRef.current = chart;

      // Add candlestick series to the chart with priceScale options
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#4caf50',
        downColor: '#f44336',
        borderDownColor: '#f44336',
        borderUpColor: '#4caf50',
        wickDownColor: '#f44336',
        wickUpColor: '#4caf50',
        priceScaleId: 'right', // Ensures the scale is positioned on the right
      });

      // Set initial data
      candlestickSeries.setData(initialData);

      // Optional: Resize chart on window resize
      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, []);

  return <div ref={chartContainerRef} className="w-full h-full bg-black" />;
};

export default LightweightChart;
