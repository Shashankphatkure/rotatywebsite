"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@/app/utils/icons";

const menuItems = [
  { icon: "home", label: "Dashboard", href: "/admin" },
  { icon: "news", label: "News", href: "/admin/news" },
  { icon: "calendar", label: "Events", href: "/admin/events" },
  { icon: "document", label: "Bulletins", href: "/admin/bulletins" },
  { icon: "donation", label: "Donations", href: "/admin/donations" },
  { icon: "building", label: "Sponsors", href: "/admin/sponsors" },
  { icon: "users", label: "Members", href: "/admin/members" },
];

export default function AdminLayout({ children }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Toggle sidebar</span>
                <Icon
                  name={isSidebarCollapsed ? "menu" : "close"}
                  className="w-6 h-6"
                />
              </button>
              <div className="ml-4">
                <span className="text-xl font-semibold">Admin Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Icon name="notification" className="w-6 h-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Icon name="settings" className="w-6 h-6" />
              </button>
              <div className="relative">
                <button className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src="/admin-avatar.jpg"
                    alt="Admin avatar"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarCollapsed ? "-translate-x-full" : "translate-x-0"
        } bg-white border-r border-gray-200`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-100 group ${
                      isActive ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      className={`w-6 h-6 mr-3 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-500 group-hover:text-gray-900"
                      }`}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`p-4 ${
          isSidebarCollapsed ? "ml-0" : "ml-64"
        } pt-20 transition-margin duration-300`}
      >
        {children}
      </div>
    </div>
  );
}
