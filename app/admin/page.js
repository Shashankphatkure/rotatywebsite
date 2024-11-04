"use client";
import { useState } from "react";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Alert from "../components/ui/Alert";

export default function AdminDashboard() {
  const [showWelcome, setShowWelcome] = useState(true);

  const stats = [
    {
      label: "Total Donations",
      value: "₱150,000",
      change: "+12.5%",
      trend: "up",
      icon: "💰",
    },
    {
      label: "Active Members",
      value: "250",
      change: "+5.2%",
      trend: "up",
      icon: "👥",
    },
    {
      label: "Upcoming Events",
      value: "5",
      change: "0%",
      trend: "neutral",
      icon: "📅",
    },
    {
      label: "Current Sponsors",
      value: "12",
      change: "-2.1%",
      trend: "down",
      icon: "🤝",
    },
  ];

  const recentActivity = [
    {
      type: "donation",
      description: "New donation received",
      amount: "₱5,000",
      donor: "John Smith",
      time: "2 minutes ago",
      icon: "💰",
    },
    {
      type: "member",
      description: "New member registration",
      name: "Maria Garcia",
      role: "Regular Member",
      time: "1 hour ago",
      icon: "👤",
    },
    {
      type: "event",
      description: "Event registration update",
      event: "Annual Charity Gala",
      count: "120 attendees",
      time: "3 hours ago",
      icon: "📅",
    },
  ];

  const upcomingTasks = [
    {
      title: "Review Donation Reports",
      deadline: "Today",
      priority: "high",
    },
    {
      title: "Approve Event Proposals",
      deadline: "Tomorrow",
      priority: "medium",
    },
    {
      title: "Update Monthly Newsletter",
      deadline: "Next Week",
      priority: "low",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Alert */}
      {showWelcome && (
        <Alert variant="info" onClose={() => setShowWelcome(false)}>
          <div className="flex items-center">
            <span className="text-lg mr-2">👋</span>
            <div>
              <h3 className="font-medium">Welcome back, Admin!</h3>
              <p className="text-sm">
                Here's what's happening with your organization today.
              </p>
            </div>
          </div>
        </Alert>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{stat.icon}</span>
              <Badge
                variant={
                  stat.trend === "up"
                    ? "success"
                    : stat.trend === "down"
                    ? "danger"
                    : "info"
                }
              >
                {stat.change}
              </Badge>
            </div>
            <h3 className="text-gray-500 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl mr-4">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium">{activity.description}</p>
                    <div className="text-sm text-gray-500 mt-1">
                      {activity.amount || activity.name || activity.event}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Tasks & Reminders */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Tasks & Reminders</h2>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-500">
                      Due: {task.deadline}
                    </p>
                  </div>
                  <Badge
                    variant={
                      task.priority === "high"
                        ? "danger"
                        : task.priority === "medium"
                        ? "warning"
                        : "info"
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Create News Post", icon: "📰" },
              { label: "Add Event", icon: "📅" },
              { label: "Upload Bulletin", icon: "📑" },
              { label: "View Reports", icon: "📊" },
            ].map((action) => (
              <button
                key={action.label}
                className="p-4 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <span className="text-2xl group-hover:scale-110 inline-block transition-transform">
                  {action.icon}
                </span>
                <span className="block mt-2 text-sm font-medium text-gray-600">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
