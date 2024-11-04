"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { Icon } from "../../utils/heroIcons";
import SearchBar from "../../components/admin/SearchBar";

export default function DonationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [view, setView] = useState("grid");

  const statuses = ["All", "Completed", "Pending", "Failed", "Refunded"];
  const types = ["All", "One-time", "Monthly", "Annual", "Campaign"];

  const donations = [
    {
      id: "DON-2024-001",
      donor: {
        name: "John Smith",
        email: "john@example.com",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32",
        type: "Regular Donor",
      },
      amount: 1000,
      currency: "USD",
      status: "Completed",
      type: "Monthly",
      date: "2024-03-15",
      campaign: "Clean Water Initiative",
      paymentMethod: "Credit Card",
      notes: "Dedicated supporter since 2020",
    },
    // Add more donations...
  ];

  const campaigns = [
    {
      name: "Clean Water Initiative",
      goal: 50000,
      raised: 35000,
      donors: 245,
      endDate: "2024-12-31",
      image:
        "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800",
    },
    // Add more campaigns...
  ];

  const filteredDonations = donations.filter((donation) => {
    const matchesSearch =
      donation.donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donation.donor.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || donation.status === selectedStatus;
    const matchesType =
      selectedType === "All" || donation.type === selectedType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Donations</h1>
          <p className="text-gray-500">Manage and track donations</p>
        </div>
        <Button variant="primary">
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Record Donation
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Donations",
            value: "$125,750",
            change: "+12%",
            icon: "dollar",
          },
          {
            label: "Active Donors",
            value: "1,234",
            change: "+5%",
            icon: "users",
          },
          {
            label: "Monthly Recurring",
            value: "$15,500",
            change: "+8%",
            icon: "refresh",
          },
          {
            label: "Average Donation",
            value: "$250",
            change: "+3%",
            icon: "chart",
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

      {/* Active Campaigns */}
      <section>
        <h2 className="text-lg font-bold mb-4">Active Campaigns</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.name} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={campaign.image}
                    alt={campaign.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{campaign.name}</h3>
                  <p className="text-sm text-gray-500">
                    Ends {new Date(campaign.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>
                      {Math.round((campaign.raised / campaign.goal) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{
                        width: `${(campaign.raised / campaign.goal) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-500">Raised</p>
                    <p className="font-bold">
                      ${campaign.raised.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Donors</p>
                    <p className="font-bold">{campaign.donors}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="w-full md:w-96">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search donations..."
          />
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
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

      {/* Donations List */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Donor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={donation.donor.image}
                          alt={donation.donor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {donation.donor.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {donation.donor.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ${donation.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {donation.paymentMethod}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="primary">{donation.type}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={
                        donation.status === "Completed"
                          ? "success"
                          : donation.status === "Failed"
                          ? "danger"
                          : "warning"
                      }
                    >
                      {donation.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {donation.campaign}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">{filteredDonations.length}</span>{" "}
            results
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
