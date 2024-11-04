"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartComponent({ type, data, options = {} }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        ...options,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, type, options]);

  return (
    <div className="w-full h-full min-h-[300px]">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
