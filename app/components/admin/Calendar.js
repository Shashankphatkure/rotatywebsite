"use client";
import { useState } from "react";
import Card from "../ui/Card";

export default function Calendar({ events = [] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{`${monthName} ${year}`}</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {blanks.map((blank) => (
          <div key={`blank-${blank}`} className="aspect-square"></div>
        ))}
        {days.map((day) => {
          const hasEvent = events.some(
            (event) => new Date(event.date).getDate() === day
          );
          return (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm ${
                hasEvent
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "hover:bg-gray-50"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
