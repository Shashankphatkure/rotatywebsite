"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { Icon } from "../../utils/heroIcons";

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("month");
  const [reportType, setReportType] = useState("overview");

  const metrics = [
    {
      label: "Total Donations",
      value: "$125,750",
      change: "+12%",
      trend: "up",
      icon: "dollar",
    },
    {
      label: "Active Members",
      value: "1,234",
      change: "+5%",
      trend: "up",
      icon: "users",
    },
    {
      label: "Projects Completed",
      value: "45",
      change: "+8",
      trend: "up",
      icon: "checkCircle",
    },
    {
      label: "Event Attendance",
      value: "89%",
      change: "-2%",
      trend: "down",
      icon: "users",
    },
  ];

  const recentReports = [
    {
      title: "Annual Financial Report 2023",
      type: "Financial",
      date: "2024-03-01",
      size: "2.5 MB",
      status: "Completed",
    },
    {
      title: "Q1 Membership Growth Analysis",
      type: "Membership",
      date: "2024-02-15",
      size: "1.8 MB",
      status: "In Progress",
    },
    {
      title: "Project Impact Assessment",
      type: "Projects",
      date: "2024-02-01",
      size: "3.2 MB",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Reports & Analytics
          </h1>
          <p className="text-gray-500">Monitor and analyze club performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="download" className="w-5 h-5 mr-2" />
            Export Data
          </Button>
          <Button variant="primary">
            <Icon name="plus" className="w-5 h-5 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Date Range and Report Type Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            {["week", "month", "quarter", "year"].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  dateRange === range
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {["overview", "financial", "membership", "projects", "events"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setReportType(type)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    reportType === type
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-6">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon name={metric.icon} className="w-6 h-6 text-blue-600" />
              </div>
              <Badge
                variant={metric.trend === "up" ? "success" : "danger"}
                className="flex items-center"
              >
                <Icon
                  name={metric.trend === "up" ? "trendingUp" : "trendingDown"}
                  className="w-4 h-4 mr-1"
                />
                {metric.change}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {metric.label}
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {metric.value}
            </p>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Donation Trends */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Donation Trends</h3>
            <select className="px-3 py-2 border rounded-lg text-sm">
              <option>Last 12 Months</option>
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Donation Chart Placeholder</p>
          </div>
        </Card>

        {/* Membership Growth */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Membership Growth</h3>
            <select className="px-3 py-2 border rounded-lg text-sm">
              <option>All Categories</option>
              <option>New Members</option>
              <option>Active Members</option>
            </select>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Membership Chart Placeholder</p>
          </div>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Recent Reports</h3>
          <Button variant="ghost">View All Reports</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentReports.map((report) => (
                <tr key={report.title} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Icon
                        name="document"
                        className="w-5 h-5 text-gray-400 mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {report.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {report.size}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="secondary">{report.type}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(report.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={
                        report.status === "Completed" ? "success" : "warning"
                      }
                    >
                      {report.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm" className="mr-2">
                      <Icon name="eye" className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="download" className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Report Generation */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">Generate Custom Report</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>Financial Report</option>
              <option>Membership Report</option>
              <option>Project Report</option>
              <option>Event Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>Last Month</option>
              <option>Last Quarter</option>
              <option>Last Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Format
            </label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <Button variant="primary">
            <Icon name="document" className="w-5 h-5 mr-2" />
            Generate Report
          </Button>
        </div>
      </Card>
    </div>
  );
}
