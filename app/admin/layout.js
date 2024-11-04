"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../utils/heroIcons";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { label: "Dashboard", icon: "dashboard", href: "/admin" },
    { label: "Members", icon: "users", href: "/admin/members" },
    { label: "Events", icon: "calendar", href: "/admin/events" },
    { label: "Projects", icon: "folder", href: "/admin/projects" },
    { label: "Donations", icon: "heart", href: "/admin/donations" },
    { label: "Bulletins", icon: "document", href: "/admin/bulletins" },
    { label: "Settings", icon: "settings", href: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-4 border-b">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/Rotary_International_Logo.svg"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-gray-900">
              Rotary Admin
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 group"
              >
                <Icon name={item.icon} className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
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
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Icon
                name={isSidebarOpen ? "menuFold" : "menuUnfold"}
                className="w-6 h-6"
              />
            </button>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Icon name="bell" className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Icon name="settings" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
