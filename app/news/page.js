"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "../components/ui/TextReveal";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { Icon } from "../utils/heroIcons";
import SearchBar from "../components/admin/SearchBar";
import MainLayout from "../layouts/MainLayout";

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Community", "Projects", "Events", "Updates"];

  const newsItems = [
    {
      title: "Annual Charity Gala Raises Record Funds",
      excerpt:
        "This year's gala exceeded all expectations, raising over $1 million for local community projects.",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      category: "Events",
      author: "Sarah Johnson",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "New Youth Mentorship Program Launches",
      excerpt:
        "Introducing our latest initiative to support young leaders in our community.",
      date: "March 10, 2024",
      image:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800",
      category: "Projects",
      author: "Michael Chen",
      readTime: "4 min read",
      featured: true,
    },
    {
      title: "Community Clean-up Drive Success",
      excerpt: "Over 200 volunteers joined forces to beautify our local parks.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
      category: "Community",
      author: "Emily Rodriguez",
      readTime: "3 min read",
    },
    {
      title: "International Partnership Announcement",
      excerpt: "Exciting new collaboration with clubs across Asia Pacific.",
      date: "March 1, 2024",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      category: "Updates",
      author: "David Kim",
      readTime: "6 min read",
    },
    // Add more news items...
  ];

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800"
            alt="News & Updates"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
          <div className="container mx-auto px-4 relative z-10">
            <TextReveal>
              <h1 className="text-5xl font-bold text-white mb-4">
                News & Updates
              </h1>
            </TextReveal>
            <p className="text-xl text-white/90 max-w-2xl">
              Stay informed about our latest initiatives, events, and impact
              stories.
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news..."
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <SectionHeader
                title="Featured Stories"
                subtitle="Our most impactful recent news"
                centered
              />
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {featuredNews.map((news) => (
                  <motion.div
                    key={news.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full group cursor-pointer">
                      <div className="relative h-64">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="primary">{news.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <Icon name="calendar" className="w-4 h-4 mr-1" />
                            {news.date}
                          </span>
                          <span className="flex items-center">
                            <Icon name="clock" className="w-4 h-4 mr-1" />
                            {news.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{news.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            By {news.author}
                          </span>
                          <span className="text-blue-600 group-hover:translate-x-2 transition-transform">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest News Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Latest News"
              subtitle="Stay up to date with our activities"
              centered
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {regularNews.map((news) => (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="primary">{news.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Icon name="calendar" className="w-4 h-4 mr-1" />
                          {news.date}
                        </span>
                        <span className="flex items-center">
                          <Icon name="clock" className="w-4 h-4 mr-1" />
                          {news.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {news.excerpt}
                      </p>
                      <span className="text-blue-600 group-hover:translate-x-2 transition-transform inline-block">
                        Read More →
                      </span>
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
