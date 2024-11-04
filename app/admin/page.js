"use client";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import { Icon } from "../utils/heroIcons";
import InfoCard from "../components/admin/InfoCard";
import ProgressCard from "../components/admin/ProgressCard";
import NotificationCenter from "../components/admin/NotificationCenter";
import ActivityItem from "../components/admin/ActivityItem";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Members",
      value: "1,234",
      change: "+12%",
      trend: "up",
      icon: "users",
    },
    {
      title: "Active Projects",
      value: "45",
      change: "+5%",
      trend: "up",
      icon: "folder",
    },
    {
      title: "Monthly Donations",
      value: "$25,678",
      change: "-2%",
      trend: "down",
      icon: "heart",
    },
    {
      title: "Upcoming Events",
      value: "12",
      change: "+3",
      trend: "up",
      icon: "calendar",
    },
  ];

  const projects = [
    {
      name: "Clean Water Initiative",
      progress: 75,
      status: "On Track",
    },
    {
      name: "Youth Education Program",
      progress: 45,
      status: "At Risk",
    },
    {
      name: "Community Health Drive",
      progress: 90,
      status: "On Track",
    },
  ];

  const recentActivity = [
    {
      type: "member",
      title: "New Member Registration",
      description: "Sarah Johnson joined as a new member",
      time: "2 hours ago",
    },
    {
      type: "donation",
      title: "Donation Received",
      description: "Received $1,000 from Anonymous Donor",
      time: "4 hours ago",
    },
    {
      type: "event",
      title: "Event Created",
      description: "Annual Charity Gala scheduled for March 15",
      time: "6 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
            Export
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <InfoCard
              title={stat.title}
              value={stat.value}
              change={stat.change}
              trend={stat.trend}
              icon={stat.icon}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Projects Progress */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Project Progress</h2>
              <button className="text-blue-600 hover:text-blue-700">
                View All
              </button>
            </div>
            <div className="space-y-6">
              {projects.map((project) => (
                <ProgressCard
                  key={project.name}
                  name={project.name}
                  progress={project.progress}
                  status={project.status}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Notifications */}
        <div className="lg:col-span-1">
          <NotificationCenter />
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <ActivityItem
              key={index}
              type={activity.type}
              title={activity.title}
              description={activity.description}
              time={activity.time}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
