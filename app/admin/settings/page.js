"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { Icon } from "../../utils/heroIcons";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: "user" },
    { id: "account", label: "Account", icon: "settings" },
    { id: "notifications", label: "Notifications", icon: "bell" },
    { id: "security", label: "Security", icon: "shield" },
    { id: "integrations", label: "Integrations", icon: "link" },
    { id: "billing", label: "Billing", icon: "creditCard" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500">
            Manage your account settings and preferences
          </p>
        </div>
        <Button variant="primary">Save Changes</Button>
      </div>

      {/* Settings Layout */}
      <div className="grid md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-3">
          <Card className="p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon name={tab.icon} className="w-5 h-5 mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content Area */}
        <div className="md:col-span-9">
          <Card className="p-6">
            {activeTab === "profile" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-white shadow-lg border border-gray-200">
                      <Icon name="camera" className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Profile Photo</h3>
                    <p className="text-sm text-gray-500">
                      Update your profile photo and personal details
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue="Doe"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      defaultValue="Administrator at Rotary Club with 5+ years of experience..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Change Password
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        Add an extra layer of security to your account
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        We'll ask for a code in addition to your password when
                        you log in on a new device
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Login Sessions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        device: "MacBook Pro",
                        location: "San Francisco, CA",
                        lastActive: "2 minutes ago",
                        current: true,
                      },
                      {
                        device: "iPhone 12",
                        location: "San Francisco, CA",
                        lastActive: "1 hour ago",
                        current: false,
                      },
                    ].map((session) => (
                      <div
                        key={session.device}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <Icon
                            name={
                              session.device.toLowerCase().includes("iphone")
                                ? "mobile"
                                : "desktop"
                            }
                            className="w-6 h-6 text-gray-500"
                          />
                          <div>
                            <p className="font-medium">
                              {session.device}
                              {session.current && (
                                <Badge variant="success" className="ml-2">
                                  Current
                                </Badge>
                              )}
                            </p>
                            <p className="text-sm text-gray-500">
                              {session.location} • {session.lastActive}
                            </p>
                          </div>
                        </div>
                        {!session.current && (
                          <Button variant="ghost" size="sm">
                            Revoke
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Add more tab content sections */}
          </Card>
        </div>
      </div>
    </div>
  );
}
