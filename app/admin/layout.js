"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../utils/heroIcons";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    {
      label: "Dashboard",
      icon: "dashboard",
      href: "/admin",
      badge: null,
    },
    {
      label: "Members",
      icon: "users",
      href: "/admin/members",
      badge: "23",
    },
    {
      label: "Events",
      icon: "calendar",
      href: "/admin/events",
      badge: "5",
    },
    {
      label: "Projects",
      icon: "folder",
      href: "/admin/projects",
      badge: "12",
    },
    {
      label: "Donations",
      icon: "heart",
      href: "/admin/donations",
      badge: null,
    },
    {
      label: "Bulletins",
      icon: "document",
      href: "/admin/bulletins",
      badge: "3",
    },
    {
      label: "Reports",
      icon: "chart",
      href: "/admin/reports",
      badge: null,
    },
    {
      label: "Settings",
      icon: "settings",
      href: "/admin/settings",
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } bg-white border-r border-gray-200 w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-5 border-b">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/Rotary_International_Logo.svg"
              alt="Logo"
              width={32}
              height={32}
            />
            <div>
              <span className="text-xl font-bold text-gray-900">
                Rotary Admin
              </span>
              <span className="text-xs text-gray-500 block">
                Management Console
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  activeMenu === item.label.toLowerCase()
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveMenu(item.label.toLowerCase())}
              >
                <div className="flex items-center">
                  <Icon name={item.icon} className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                <Icon name="logout" className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`${
          isSidebarOpen ? "ml-64" : "ml-0"
        } min-h-screen transition-all duration-300`}
      >
        {/* Top Bar */}
        <header className="bg-white border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Icon
                  name={isSidebarOpen ? "menuFold" : "menuUnfold"}
                  className="w-6 h-6"
                />
              </button>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Icon
                  name="search"
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Icon name="bell" className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Icon name="settings" className="w-6 h-6 text-gray-600" />
              </button>
              <div className="h-6 w-px bg-gray-200"></div>
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                <Icon name="globe" className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">EN</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
