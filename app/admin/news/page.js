"use client";
import { useState } from "react";
import DashboardHeader from "@/app/components/admin/DashboardHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import FileUploader from "@/app/components/admin/FileUploader";
import Pagination from "@/app/components/admin/Pagination";
import SearchBar from "@/app/components/admin/SearchBar";
import Modal from "@/app/components/Modal";

export default function AdminNews() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "Annual Charity Gala Raises Record Funds",
      status: "published",
      date: "2024-03-15",
      author: "John Smith",
      views: 1250,
    },
    // Add more articles...
  ];

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="News Management"
        subtitle="Create and manage news articles"
        actions={
          <Button variant="primary" onClick={() => setCreateModalOpen(true)}>
            Create Article
          </Button>
        }
      />

      <Card className="p-6">
        <div className="mb-6">
          <SearchBar
            onSearch={setSearchTerm}
            placeholder="Search articles..."
            className="max-w-md"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {article.title}
                    </div>
                    <div className="text-sm text-gray-500">{article.date}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {article.author}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        article.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {article.views}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium space-x-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Preview
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={setCurrentPage}
          />
        </div>
      </Card>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title="Create New Article"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Featured Image
            </label>
            <FileUploader
              accept="image/*"
              maxSize={5242880}
              onUpload={(file) => console.log("File uploaded:", file)}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={() => setCreateModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create Article
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
