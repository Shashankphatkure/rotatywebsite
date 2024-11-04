import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="mt-4">
          <a
            href="/admin"
            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/admin/news"
            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            News
          </a>
          <a
            href="/admin/events"
            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Events
          </a>
          <a
            href="/admin/bulletins"
            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Bulletins
          </a>
          <a
            href="/admin/donations"
            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Donations
          </a>
          <a
            href="/admin/sponsors"
            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Sponsors
          </a>
          <a
            href="/admin/members"
            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Members
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
