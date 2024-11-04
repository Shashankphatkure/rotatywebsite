"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import TableSearch from "@/app/components/TableSearch";

export default function AdminSponsors() {
  const [sponsors, setSponsors] = useState([
    {
      id: 1,
      name: "ABC Corporation",
      level: "Platinum",
      since: "2024-01-01",
      contribution: "₱100,000",
      status: "active",
    },
    {
      id: 2,
      name: "XYZ Industries",
      level: "Gold",
      since: "2024-02-01",
      contribution: "₱50,000",
      status: "active",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ level: "", status: "" });

  const filterOptions = [
    {
      name: "level",
      label: "Filter by Level",
      options: [
        { label: "Platinum", value: "Platinum" },
        { label: "Gold", value: "Gold" },
        { label: "Silver", value: "Silver" },
      ],
    },
    {
      name: "status",
      label: "Filter by Status",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
    },
  ];

  const filteredSponsors = sponsors.filter((sponsor) => {
    const matchesSearch = sponsor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLevel = filters.level ? sponsor.level === filters.level : true;
    const matchesStatus = filters.status
      ? sponsor.status === filters.status
      : true;

    return matchesSearch && matchesLevel && matchesStatus;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Sponsors</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add New Sponsor
        </button>
      </div>

      <TableSearch
        onSearch={setSearchTerm}
        filters={filterOptions}
        onFilter={(name, value) =>
          setFilters((prev) => ({ ...prev, [name]: value }))
        }
      />

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sponsor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Since
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contribution
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredSponsors.map((sponsor) => (
              <tr key={sponsor.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {sponsor.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {sponsor.level}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {sponsor.since}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sponsor.contribution}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {sponsor.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    Edit
                  </button>
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    View
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Sponsor"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sponsorship Level
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="Platinum">Platinum</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contribution Amount
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Sponsor
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
