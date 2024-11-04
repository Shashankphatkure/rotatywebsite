"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { Icon } from "../../utils/heroIcons";
import SearchBar from "../../components/admin/SearchBar";

export default function MembersPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("grid"); // grid or table

  const statuses = ["All", "Active", "Pending", "Inactive"];
  const roles = ["Member", "Board Member", "Committee Head", "Volunteer"];

  const members = [
    {
      id: 1,
      name: "John Smith",
      role: "Board Member",
      email: "john@example.com",
      phone: "+1 234 567 890",
      joinDate: "2020-03-15",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32",
      committees: ["Finance", "Events"],
      projects: 12,
      contributions: "$5,000",
    },
    // Add more members...
  ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || member.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Members</h1>
          <p className="text-gray-500">Manage and monitor member information</p>
        </div>
        <Button variant="primary">
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Add Member
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Members",
            value: "1,234",
            change: "+12",
            icon: "users",
          },
          {
            label: "Active Members",
            value: "1,180",
            change: "+8",
            icon: "userCheck",
          },
          {
            label: "New This Month",
            value: "48",
            change: "+15%",
            icon: "userPlus",
          },
          {
            label: "Retention Rate",
            value: "95%",
            change: "+2%",
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

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="w-full md:w-96">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search members..."
          />
        </div>
        <div className="flex items-center space-x-4">
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

      {/* Members Grid/Table */}
      {view === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          member.status === "Active"
                            ? "bg-green-400"
                            : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Icon name="dots" className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-sm">
                    <Icon name="email" className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{member.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="phone" className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{member.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="calendar"
                      className="w-4 h-4 text-gray-400 mr-2"
                    />
                    <span className="text-gray-600">
                      Joined {new Date(member.joinDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {member.committees.map((committee) => (
                      <Badge key={committee} variant="secondary">
                        {committee}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Projects</p>
                    <p className="text-lg font-semibold">{member.projects}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Contributions</p>
                    <p className="text-lg font-semibold">
                      {member.contributions}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    <Icon name="edit" className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="message" className="w-4 h-4 mr-2" />
                    Message
                  </Button>
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
                    Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Projects
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {member.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {member.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={
                          member.status === "Active"
                            ? "success"
                            : member.status === "Inactive"
                            ? "danger"
                            : "warning"
                        }
                      >
                        {member.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(member.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.projects}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Delete
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
            <span className="font-medium">{filteredMembers.length}</span>{" "}
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
