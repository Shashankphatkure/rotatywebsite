"use client";
import { useState } from "react";
import DashboardHeader from "@/app/components/admin/DashboardHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import FileUploader from "@/app/components/admin/FileUploader";
import Pagination from "@/app/components/admin/Pagination";
import SearchBar from "@/app/components/admin/SearchBar";
import Modal from "@/app/components/Modal";
import { Icon } from "@/app/utils/heroIcons";

export default function AdminBulletins() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "" });

  const bulletins = [
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
  ];

  const filterOptions = [
    {
      name: "status",
      label: "Status",
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" },
      ],
    },
  ];

  const filteredBulletins = bulletins.filter((bulletin) => {
    const matchesSearch = bulletin.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filters.status
      ? bulletin.status === filters.status
      : true;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Bulletins Management"
        subtitle="Upload and manage monthly bulletins"
        actions={
          <Button
            variant="primary"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2"
          >
            <Icon name="add" className="w-5 h-5" />
            Upload New Bulletin
          </Button>
        }
      />

      <Card className="p-6">
        <div className="mb-6">
          <SearchBar
            onSearch={setSearchTerm}
            placeholder="Search bulletins..."
            className="max-w-md"
          />
        </div>

        <div className="overflow-x-auto">
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
              {filteredBulletins.map((bulletin) => (
                <tr key={bulletin.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Icon
                        name="document"
                        className="w-5 h-5 text-gray-400 mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {bulletin.title}
                        </div>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {bulletin.status}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {bulletin.publishDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Icon
                        name="download"
                        className="w-4 h-4 text-gray-400 mr-1"
                      />
                      {bulletin.downloads}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {bulletin.fileSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="inline-flex items-center"
                    >
                      <Icon name="view" className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="inline-flex items-center"
                    >
                      <Icon name="edit" className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="inline-flex items-center text-red-600 hover:text-red-800"
                    >
                      <Icon name="delete" className="w-4 h-4 mr-1" />
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Upload New Bulletin"
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
              Description
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PDF File
            </label>
            <FileUploader
              accept=".pdf"
              maxSize={10485760} // 10MB
              onUpload={(file) => console.log("File uploaded:", file)}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
              className="inline-flex items-center"
            >
              <Icon name="close" className="w-4 h-4 mr-1" />
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="inline-flex items-center"
            >
              <Icon name="upload" className="w-4 h-4 mr-1" />
              Upload Bulletin
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
