"use client";
import { useState } from "react";
import DashboardHeader from "@/app/components/admin/DashboardHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import FileUploader from "@/app/components/admin/FileUploader";
import Pagination from "@/app/components/admin/Pagination";
import SearchBar from "@/app/components/admin/SearchBar";
import Modal from "@/app/components/Modal";
import Calendar from "@/app/components/admin/Calendar";

export default function AdminEvents() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "", category: "" });

  const events = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "2024-04-15",
      time: "6:00 PM",
      location: "Grand Ballroom, City Hotel",
      status: "upcoming",
      registrations: 120,
      category: "Fundraising",
    },
    // Add more events...
  ];

  const filterOptions = [
    {
      name: "status",
      label: "Status",
      options: [
        { label: "Upcoming", value: "upcoming" },
        { label: "Ongoing", value: "ongoing" },
        { label: "Completed", value: "completed" },
      ],
    },
    {
      name: "category",
      label: "Category",
      options: [
        { label: "Fundraising", value: "fundraising" },
        { label: "Community Service", value: "community" },
        { label: "Workshop", value: "workshop" },
      ],
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filters.status
      ? event.status === filters.status
      : true;
    const matchesCategory = filters.category
      ? event.category === filters.category
      : true;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Events Management"
        subtitle="Create and manage events"
        actions={
          <Button variant="primary" onClick={() => setCreateModalOpen(true)}>
            Create Event
          </Button>
        }
      />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="p-6">
            <div className="mb-6">
              <SearchBar
                onSearch={setSearchTerm}
                placeholder="Search events..."
                className="max-w-md"
              />
            </div>

            <div className="overflow-x-auto">
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
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {event.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {event.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {event.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {event.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {event.registrations} registered
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button variant="ghost" size="sm" className="mr-2">
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600"
                        >
                          Cancel
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={5}
                onPageChange={setCurrentPage}
              />
            </div>
          </Card>
        </div>

        <div>
          <Calendar events={events} />
        </div>
      </div>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title="Create New Event"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="fundraising">Fundraising</option>
              <option value="community">Community Service</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Image
            </label>
            <FileUploader
              accept="image/*"
              maxSize={5242880}
              onUpload={(file) => console.log("File uploaded:", file)}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={() => setCreateModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create Event
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
