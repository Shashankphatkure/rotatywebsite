"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { Icon } from "../../utils/heroIcons";
import SearchBar from "../../components/admin/SearchBar";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [view, setView] = useState("grid");

  const statuses = ["All", "Upcoming", "Ongoing", "Completed", "Cancelled"];
  const categories = [
    "All",
    "Fundraising",
    "Service",
    "Training",
    "Social",
    "Conference",
  ];

  const events = [
    {
      id: 1,
      title: "Annual Charity Gala",
      description:
        "A night of celebration and fundraising for our community projects.",
      date: "2024-03-15",
      time: "18:00",
      location: "Grand Hotel Ballroom",
      category: "Fundraising",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      registrations: 180,
      capacity: 250,
      organizer: "Events Committee",
      budget: "$15,000",
      sponsors: ["ABC Corp", "XYZ Inc"],
    },
    // Add more events...
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || event.status === selectedStatus;
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-500">Manage and monitor event activities</p>
        </div>
        <Button variant="primary">
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Events",
            value: "45",
            change: "+5",
            icon: "calendar",
          },
          {
            label: "Upcoming Events",
            value: "12",
            change: "+2",
            icon: "clock",
          },
          {
            label: "Total Registrations",
            value: "1,250",
            change: "+85",
            icon: "users",
          },
          {
            label: "Revenue Generated",
            value: "$25K",
            change: "+12%",
            icon: "dollar",
          },
        ].map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon name={stat.icon} className="w-6 h-6 text-blue-600" />
              </div>
              <Badge
                variant={stat.change.startsWith("+") ? "success" : "danger"}
              >
                {stat.change}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {stat.label}
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="w-full md:w-96">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events..."
          />
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="flex space-x-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedStatus === status
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          <div className="border-l pl-4 flex space-x-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg ${
                view === "grid" ? "bg-blue-50 text-blue-600" : "text-gray-400"
              }`}
            >
              <Icon name="grid" className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView("table")}
              className={`p-2 rounded-lg ${
                view === "table" ? "bg-blue-50 text-blue-600" : "text-gray-400"
              }`}
            >
              <Icon name="list" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Events Grid/Table */}
      {view === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="h-full">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="primary">{event.category}</Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        event.status === "Upcoming"
                          ? "success"
                          : event.status === "Cancelled"
                          ? "danger"
                          : "warning"
                      }
                    >
                      {event.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icon name="calendar" className="w-4 h-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="clock" className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="location" className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Registrations
                      </span>
                      <span className="text-sm font-medium">
                        {event.registrations}/{event.capacity}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{
                          width: `${
                            (event.registrations / event.capacity) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Icon name="edit" className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="users" className="w-4 h-4 mr-2" />
                      Attendees
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registrations
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 rounded overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {event.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">{event.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="primary">{event.category}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={
                          event.status === "Upcoming"
                            ? "success"
                            : event.status === "Cancelled"
                            ? "danger"
                            : "warning"
                        }
                      >
                        {event.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {event.registrations}/{event.capacity}
                      </div>
                      <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{
                            width: `${
                              (event.registrations / event.capacity) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
        </Card>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">{filteredEvents.length}</span> results
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
