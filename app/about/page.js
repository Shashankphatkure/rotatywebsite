"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "../components/ui/TextReveal";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import { Icon } from "../utils/heroIcons";
import Badge from "../components/ui/Badge";
import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60"
            alt="About Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
          <div className="container mx-auto px-4 relative z-10">
            <TextReveal>
              <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
            </TextReveal>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover our history, mission, and the people who make our impact
              possible.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our History"
              subtitle="A Timeline of Our Journey"
            />
            <div className="mt-8 space-y-8">
              <div className="relative">
                <div className="border-l-4 border-blue-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                {[
                  {
                    year: "1974",
                    title: "Foundation of Our Club",
                    description:
                      "Our journey began with a small group of passionate individuals committed to making a difference.",
                    icon: "flag",
                  },
                  {
                    year: "1985",
                    title: "First International Partnership",
                    description:
                      "We expanded our reach by forming our first international partnership.",
                    icon: "globe",
                  },
                  {
                    year: "1999",
                    title: "Launch of Our Flagship Program",
                    description:
                      "We launched a program that became the cornerstone of our community efforts.",
                    icon: "rocket",
                  },
                  {
                    year: "2010",
                    title: "Expansion to New Regions",
                    description:
                      "Our organization expanded to new regions, increasing our impact.",
                    icon: "map",
                  },
                  {
                    year: "2024",
                    title: "Celebrating 50 Years of Service",
                    description:
                      "We celebrate half a century of service and leadership.",
                    icon: "trophy",
                  },
                ].map((event, index) => (
                  <div
                    key={event.year}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    } mb-8`}
                  >
                    <div className="md:w-1/2 p-2 flex justify-center">
                      <div className="bg-white p-6 rounded-full shadow-lg flex items-center justify-center">
                        <Icon
                          name={event.icon}
                          className="w-8 h-8 text-blue-600"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-2">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-600 mb-1">
                          {event.year}
                        </h3>
                        <h4 className="text-lg font-bold mb-2">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Leadership"
              subtitle="Meet the team driving our mission forward"
              centered
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  name: "John Smith",
                  role: "Club President",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60",
                  bio: "20+ years of community service experience",
                },
                {
                  name: "Jane Doe",
                  role: "Vice President",
                  image:
                    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60",
                  bio: "Expert in strategic planning and development",
                },
                {
                  name: "Alice Johnson",
                  role: "Treasurer",
                  image:
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
                  bio: "Financial management and fundraising specialist",
                },
                // Add more leaders...
              ].map((leader) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-blue-600 mb-4">{leader.role}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon name="target" className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide service to others, promote integrity, and advance
                    world understanding, goodwill, and peace through our
                    fellowship of business, professional, and community leaders.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8 h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon name="eye" className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    Together, we see a world where people unite and take action
                    to create lasting change — across the globe, in our
                    communities, and in ourselves.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Core Values"
              subtitle="The principles that guide our actions"
              centered
            />
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Fellowship",
                  icon: "users",
                  description: "Building lasting friendships and connections",
                },
                {
                  title: "Integrity",
                  icon: "shield",
                  description: "Honoring our commitments with ethical behavior",
                },
                {
                  title: "Diversity",
                  icon: "globe",
                  description:
                    "Embracing different perspectives and backgrounds",
                },
                {
                  title: "Service",
                  icon: "heart",
                  description: "Dedicating ourselves to helping others",
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name={value.icon}
                        className="w-6 h-6 text-blue-600"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
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
