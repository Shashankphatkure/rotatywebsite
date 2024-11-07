"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "../components/ui/TextReveal";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { Icon } from "../utils/heroIcons";
import SearchBar from "../components/admin/SearchBar";
import MainLayout from "../layouts/MainLayout";

export default function Bulletins() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedYear, setSelectedYear] = useState("2024");

  const types = [
    "All",
    "Club Bulletins",
    "Monthly Bulletin",
    "Meeting Minutes",
    "Announcement",
    "Report",
  ];
  const years = ["2024", "2023", "2022", "2021"];

  const bulletins = [
    {
      title: "March 2024 Monthly Bulletin",
      type: "Monthly Bulletin",
      date: "2024-03-01",
      description:
        "Monthly update on club activities, achievements, and upcoming events.",
      fileSize: "2.5 MB",
      format: "PDF",
      featured: true,
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
      downloadUrl: "#",
    },
    {
      title: "Board Meeting Minutes - February 2024",
      type: "Meeting Minutes",
      date: "2024-02-28",
      description:
        "Minutes from the February board meeting discussing project updates and financial reports.",
      fileSize: "1.2 MB",
      format: "PDF",
      featured: false,
      thumbnail:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
      downloadUrl: "#",
    },
    {
      title: "Annual Impact Report 2023",
      type: "Report",
      date: "2024-02-15",
      description:
        "Comprehensive report on our club's achievements and impact throughout 2023.",
      fileSize: "5.8 MB",
      format: "PDF",
      featured: true,
      thumbnail:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
      downloadUrl: "#",
    },
    {
      title: "Special Announcement: New Partnership",
      type: "Announcement",
      date: "2024-02-10",
      description:
        "Important announcement regarding our new partnership with local organizations.",
      fileSize: "800 KB",
      format: "PDF",
      featured: false,
      thumbnail:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      downloadUrl: "#",
    },
    // Add more bulletins...
  ];

  const filteredBulletins = bulletins.filter((bulletin) => {
    const matchesSearch =
      bulletin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bulletin.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      selectedType === "All" || bulletin.type === selectedType;
    const matchesYear = bulletin.date.startsWith(selectedYear);
    return matchesSearch && matchesType && matchesYear;
  });

  const featuredBulletins = filteredBulletins.filter(
    (bulletin) => bulletin.featured
  );
  const regularBulletins = filteredBulletins.filter(
    (bulletin) => !bulletin.featured
  );

  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800"
            alt="Bulletins & Documents"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
          <div className="container mx-auto px-4 relative z-10">
            <TextReveal>
              <h1 className="text-5xl font-bold text-white mb-4">
                Bulletins & Documents
              </h1>
            </TextReveal>
            <p className="text-xl text-white/90 max-w-2xl">
              Access our monthly bulletins, meeting minutes, and important club
              documents.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-96">
                <SearchBar
                  value={searchQuery}
                  onSearch={(value) => setSearchQuery(value)}
                  placeholder="Search bulletins..."
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedType === type
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Documents */}
        {featuredBulletins.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <SectionHeader
                title="Featured Documents"
                subtitle="Important publications and announcements"
                centered
              />
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {featuredBulletins.map((bulletin) => (
                  <motion.div
                    key={bulletin.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full group">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-full min-h-[200px]">
                          <Image
                            src={bulletin.thumbnail}
                            alt={bulletin.title}
                            fill
                            className="object-cover"
                          />
                          <Badge
                            variant="primary"
                            className="absolute top-4 right-4"
                          >
                            {bulletin.type}
                          </Badge>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3">
                            {bulletin.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {bulletin.description}
                          </p>
                          <div className="space-y-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <Icon name="calendar" className="w-4 h-4 mr-2" />
                              {new Date(bulletin.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Icon name="document" className="w-4 h-4 mr-2" />
                              {bulletin.format} ({bulletin.fileSize})
                            </div>
                          </div>
                          <Button
                            variant="primary"
                            className="w-full"
                            href={bulletin.downloadUrl}
                          >
                            Download
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Document Archive */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Document Archive"
              subtitle="Access our previous bulletins and documents"
              centered
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {regularBulletins.map((bulletin) => (
                <motion.div
                  key={bulletin.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={bulletin.thumbnail}
                        alt={bulletin.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="primary">{bulletin.type}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        {bulletin.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {bulletin.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <Icon name="calendar" className="w-4 h-4 mr-1" />
                          {new Date(bulletin.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Icon name="document" className="w-4 h-4 mr-1" />
                          {bulletin.format} ({bulletin.fileSize})
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-blue-50"
                        href={bulletin.downloadUrl}
                      >
                        Download
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
