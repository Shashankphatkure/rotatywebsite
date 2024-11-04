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

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");

  const categories = [
    "All",
    "Fundraising",
    "Service",
    "Training",
    "Social",
    "Conference",
  ];
  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];

  const events = [
    {
      title: "Annual Charity Gala",
      description:
        "Join us for an evening of celebration and fundraising for local community projects.",
      date: "2024-03-15",
      time: "18:00",
      location: "Grand Hotel Ballroom",
      category: "Fundraising",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      attendees: 250,
      status: "Open",
      featured: true,
    },
    {
      title: "Community Service Day",
      description:
        "A day dedicated to cleaning and beautifying our local parks and public spaces.",
      date: "2024-03-20",
      time: "09:00",
      location: "City Park",
      category: "Service",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
      attendees: 100,
      status: "Open",
      featured: true,
    },
    {
      title: "Leadership Workshop",
      description:
        "Develop your leadership skills with expert guidance and practical exercises.",
      date: "2024-03-25",
      time: "14:00",
      location: "Innovation Center",
      category: "Training",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      attendees: 50,
      status: "Limited",
      featured: false,
    },
    // Add more events...
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesMonth =
      selectedMonth === "All" ||
      new Date(event.date).toLocaleString("default", { month: "long" }) ===
        selectedMonth;
    return matchesSearch && matchesCategory && matchesMonth;
  });

  const featuredEvents = filteredEvents.filter((event) => event.featured);
  const upcomingEvents = filteredEvents.filter((event) => !event.featured);

  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800"
            alt="Events"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
          <div className="container mx-auto px-4 relative z-10">
            <TextReveal>
              <h1 className="text-5xl font-bold text-white mb-4">Events</h1>
            </TextReveal>
            <p className="text-xl text-white/90 max-w-2xl">
              Join us at our upcoming events and be part of creating positive
              change in our community.
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
                  placeholder="Search events..."
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
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
          </div>
        </section>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <SectionHeader
                title="Featured Events"
                subtitle="Don't miss out on these special occasions"
                centered
              />
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {featuredEvents.map((event) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full group">
                      <div className="relative h-64">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="primary">{event.category}</Badge>
                        </div>
                        {event.status === "Limited" && (
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary">Limited Spots</Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                        <div className="space-y-2 text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Icon name="calendar" className="w-5 h-5 mr-2" />
                            <span>
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="clock" className="w-5 h-5 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="location" className="w-5 h-5 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="users" className="w-5 h-5 mr-2" />
                            <span>{event.attendees} Attendees Expected</span>
                          </div>
                        </div>
                        <Button
                          variant={
                            event.status === "Full" ? "secondary" : "primary"
                          }
                          className="w-full"
                          disabled={event.status === "Full"}
                        >
                          {event.status === "Full"
                            ? "Event Full"
                            : "Register Now"}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Calendar View */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Event Calendar"
              subtitle="Plan ahead with our event schedule"
              centered
            />
            <div className="bg-white rounded-lg shadow p-6 mt-12">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="chevronLeft" className="w-5 h-5 mr-1" />
                    Previous
                  </Button>
                  <Button variant="ghost" size="sm">
                    Next
                    <Icon name="chevronRight" className="w-5 h-5 ml-1" />
                  </Button>
                </div>
                <h3 className="text-lg font-semibold">March 2024</h3>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    Today
                  </Button>
                  <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Month</option>
                    <option>Week</option>
                    <option>Day</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-px bg-gray-200">
                <div className="bg-gray-50 p-2 text-center text-sm font-medium">
                  Sun
                </div>
                <div className="bg-gray-50 p-2 text-center text-sm font-medium">
                  Mon
                </div>
                <div className="bg-gray-50 p-2 text-center text-sm font-medium">
                  Tue
                </div>
                <div className="bg-gray-50 p-2 text-center text-sm font-medium">
                  Wed
                </div>
                <div className="bg-gray-50 p-2 text-center text-sm font-medium">
                  Thu
                </div>
                <div className="bg-gray-50 p-2 text-center text-sm font-medium">
                  Fri
                </div>
                <div className="bg-gray-50 p-2 text-center text-sm font-medium">
                  Sat
                </div>

                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className="bg-white min-h-[100px] p-2 relative">
                    <span className="text-sm text-gray-500">{i + 1}</span>
                    {i === 14 && (
                      <div className="absolute top-8 left-2 right-2">
                        <div className="bg-blue-100 text-blue-800 p-1 rounded text-xs">
                          Annual Charity Gala
                        </div>
                      </div>
                    )}
                    {i === 21 && (
                      <div className="absolute top-8 left-2 right-2">
                        <div className="bg-green-100 text-green-800 p-1 rounded text-xs">
                          Community Service Day
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="More Upcoming Events"
              subtitle="Join us at these upcoming events"
              centered
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="primary">{event.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="space-y-2 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Icon name="calendar" className="w-5 h-5 mr-2" />
                          <span>
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="location" className="w-5 h-5 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-blue-50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Host an Event CTA */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "url('/patterns/circuit.svg')",
              backgroundSize: "cover",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <TextReveal>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Want to Host an Event?
                </h2>
              </TextReveal>
              <p className="text-white/90 mb-8">
                We welcome proposals for events that align with our mission and
                values. Let's work together to create meaningful experiences for
                our community.
              </p>
              <Button variant="secondary" size="lg">
                Submit Event Proposal
              </Button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
