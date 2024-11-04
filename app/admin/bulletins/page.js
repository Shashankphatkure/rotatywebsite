"use client";
import { useState } from "react";
import DashboardHeader from "@/app/components/admin/DashboardHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import FileUploader from "@/app/components/admin/FileUploader";
import Pagination from "@/app/components/admin/Pagination";
import SearchBar from "@/app/components/admin/SearchBar";
import Modal from "@/app/components/Modal";

export default function AdminBulletins() {
  const [bulletins, setBulletins] = useState([
    {
      id: 1,
      title: "March 2024 Newsletter",
      publishDate: "2024-03-01",
      downloads: 156,
      fileSize: "2.4 MB",
      status: "published",
    },
    {
      id: 2,
      title: "February 2024 Newsletter",
      publishDate: "2024-02-01",
      downloads: 243,
      fileSize: "2.1 MB",
      status: "published",
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Bulletins</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Upload New Bulletin
        </button>
      </div>

      {/* Bulletins Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Publish Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Downloads
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                File Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bulletins.map((bulletin) => (
              <tr key={bulletin.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {bulletin.title}
                  </div>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {bulletin.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bulletin.publishDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {bulletin.downloads}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bulletin.fileSize}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    View
                  </button>
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
    </div>
  );
}
