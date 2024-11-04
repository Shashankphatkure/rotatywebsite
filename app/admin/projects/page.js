"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { Icon } from "../../utils/heroIcons";
import SearchBar from "../../components/admin/SearchBar";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [view, setView] = useState("grid");

  const statuses = ["All", "Active", "On Hold", "Completed", "Planning"];
  const categories = ["All", "Education", "Health", "Environment", "Community"];

  const projects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description:
        "Providing clean water access to rural communities in East Africa",
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      category: "Environment",
      status: "Active",
      progress: 65,
      budget: "$50,000",
      spent: "$32,500",
      location: "East Africa",
      manager: "Sarah Johnson",
      team: [
        { name: "John Doe", role: "Field Coordinator" },
        { name: "Jane Smith", role: "Technical Lead" },
      ],
      image:
        "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800",
      milestones: [
        { title: "Site Assessment", status: "Completed", date: "2024-02-01" },
        {
          title: "Equipment Installation",
          status: "In Progress",
          date: "2024-03-15",
        },
        { title: "Community Training", status: "Pending", date: "2024-04-01" },
      ],
      risks: [
        {
          type: "Weather Conditions",
          severity: "Medium",
          mitigation: "Flexible schedule",
        },
        {
          type: "Supply Chain",
          severity: "High",
          mitigation: "Local sourcing",
        },
      ],
    },
    // Add more projects...
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || project.status === selectedStatus;
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-500">Manage and monitor project progress</p>
        </div>
        <Button variant="primary">
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Create Project
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Projects",
            value: "45",
            change: "+5",
            icon: "folder",
          },
          { label: "Active Projects", value: "28", change: "+3", icon: "play" },
          {
            label: "Budget Utilized",
            value: "$1.2M",
            change: "+15%",
            icon: "dollar",
          },
          { label: "Team Members", value: "124", change: "+8", icon: "users" },
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
            placeholder="Search projects..."
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

      {/* Projects Grid/Table */}
      {view === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="h-full">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="primary">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        project.status === "Active"
                          ? "success"
                          : project.status === "On Hold"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Budget</span>
                        <p className="font-semibold">{project.budget}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Spent</span>
                        <p className="font-semibold">{project.spent}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="location" className="w-4 h-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="user" className="w-4 h-4 mr-2" />
                        <span>{project.manager}</span>
                      </div>
                    </div>

                    <div className="flex -space-x-2">
                      {project.team.map((member, index) => (
                        <div
                          key={member.name}
                          className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                          title={`${member.name} - ${member.role}`}
                        >
                          {member.name.charAt(0)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                        +{project.team.length}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Icon name="edit" className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="chart" className="w-4 h-4 mr-2" />
                      Details
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
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 rounded overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {project.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {project.manager}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="primary">{project.category}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={
                          project.status === "Active"
                            ? "success"
                            : project.status === "On Hold"
                            ? "warning"
                            : "secondary"
                        }
                      >
                        {project.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900 mb-1">
                          {project.progress}%
                        </div>
                        <div className="w-24 h-1.5 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {project.budget}
                      </div>
                      <div className="text-sm text-gray-500">
                        Spent: {project.spent}
                      </div>
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
            <span className="font-medium">{filteredProjects.length}</span>{" "}
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
