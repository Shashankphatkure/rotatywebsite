"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import TableSearch from "@/app/components/TableSearch";

export default function AdminDonations() {
  const [donations, setDonations] = useState([
    {
      id: 1,
      donor: "John Smith",
      amount: "₱5,000",
      date: "2024-03-15",
      paymentMethod: "GCash",
      status: "completed",
    },
    {
      id: 2,
      donor: "Maria Garcia",
      amount: "₱10,000",
      date: "2024-03-14",
      paymentMethod: "Credit Card",
      status: "completed",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ paymentMethod: "", status: "" });

  const filterOptions = [
    {
      name: "paymentMethod",
      label: "Payment Method",
      options: [
        { label: "GCash", value: "GCash" },
        { label: "Credit Card", value: "Credit Card" },
        { label: "Alipay", value: "Alipay" },
      ],
    },
    {
      name: "status",
      label: "Status",
      options: [
        { label: "Completed", value: "completed" },
        { label: "Pending", value: "pending" },
        { label: "Failed", value: "failed" },
      ],
    },
  ];

  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.amount.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPaymentMethod = filters.paymentMethod
      ? donation.paymentMethod === filters.paymentMethod
      : true;
    const matchesStatus = filters.status
      ? donation.status === filters.status
      : true;

    return matchesSearch && matchesPaymentMethod && matchesStatus;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Donations</h1>
        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Export Report
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Record Manual Donation
          </button>
        </div>
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
                Donor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method
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
            {filteredDonations.map((donation) => (
              <tr key={donation.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {donation.donor}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {donation.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {donation.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {donation.paymentMethod}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {donation.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    View
                  </button>
                  <button className="text-blue-600 hover:text-blue-900">
                    Receipt
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
        title="Record Manual Donation"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Donor Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option value="GCash">GCash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Alipay">Alipay</option>
              <option value="Cash">Cash</option>
              <option value="Check">Check</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
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
              Record Donation
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
