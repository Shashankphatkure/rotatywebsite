"use client";
import { useState } from "react";

export default function AdminEvents() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "2024-04-15",
      time: "6:00 PM",
      location: "Grand Ballroom, City Hotel",
      status: "upcoming",
      registrations: 120,
    },
    {
      id: 2,
      title: "Community Clean-up Drive",
      date: "2024-04-20",
      time: "8:00 AM",
      location: "City Park",
      status: "upcoming",
      registrations: 45,
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Events</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Create New Event
        </button>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registrations
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {event.title}
                  </div>
                  <div className="text-sm text-gray-500">{event.status}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{event.date}</div>
                  <div className="text-sm text-gray-500">{event.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {event.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {event.registrations} people
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
