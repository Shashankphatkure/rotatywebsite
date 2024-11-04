"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { Icon } from "./utils/heroIcons";
import Badge from "./components/ui/Badge";
import TextReveal from "./components/ui/TextReveal";
import SectionHeader from "./components/ui/SectionHeader";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section - Redesigned */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="primary" className="mb-6">
                  Celebrating 50 Years of Service
                </Badge>
                <TextReveal>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Empowering Communities
                    <span className="text-blue-400"> Together</span>
                  </h1>
                </TextReveal>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Join our global network of 1.4 million neighbors, friends, and
                  community leaders who see a world where people unite and take
                  action to create lasting change.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" className="min-w-[160px]">
                    Get Involved
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                  >
                    Watch Video
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative h-[500px] w-full">
                  <Image
                    src="/hero-collage.png"
                    alt="Impact Collage"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats Banner */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center gap-8">
              {[
                { label: "Global Members", value: "1.4M+" },
                { label: "Countries & Regions", value: "200+" },
                { label: "Years of Impact", value: "50+" },
                { label: "Active Projects", value: "35K+" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-bold text-blue-600">
                    {stat.value}
                  </span>
                  <span className="text-gray-600">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Initiatives */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Current Initiatives"
              subtitle="Making real impact where it matters most"
              centered
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Clean Water Project",
                  location: "East Africa",
                  progress: 75,
                  raised: "$1.2M",
                  goal: "$1.5M",
                  image: "/projects/water.jpg",
                  category: "Environment",
                },
                {
                  title: "Education for All",
                  location: "South Asia",
                  progress: 60,
                  raised: "$800K",
                  goal: "$1.2M",
                  image: "/projects/education.jpg",
                  category: "Education",
                },
                {
                  title: "Healthcare Access",
                  location: "Latin America",
                  progress: 40,
                  raised: "$400K",
                  goal: "$1M",
                  image: "/projects/health.jpg",
                  category: "Healthcare",
                },
              ].map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden group">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge
                        variant="primary"
                        className="absolute top-4 right-4"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-600">{project.location}</p>
                        </div>
                        <Icon
                          name={project.category.toLowerCase()}
                          className="w-6 h-6 text-blue-600"
                        />
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Raised: {project.raised}</span>
                        <span>Goal: {project.goal}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Impact Areas"
              subtitle="Focused on creating sustainable change"
              centered
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Peace & Conflict Resolution",
                  icon: "peace",
                  description: "Building understanding and fostering dialogue",
                  projects: 120,
                },
                {
                  title: "Disease Prevention",
                  icon: "health",
                  description: "Fighting diseases and promoting health",
                  projects: 85,
                },
                {
                  title: "Clean Water",
                  icon: "water",
                  description: "Providing access to clean water and sanitation",
                  projects: 200,
                },
                {
                  title: "Education Support",
                  icon: "education",
                  description: "Enhancing literacy and learning opportunities",
                  projects: 150,
                },
              ].map((area) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <Icon
                          name={area.icon}
                          className="w-8 h-8 text-blue-600"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                      <p className="text-gray-600 mb-4">{area.description}</p>
                      <div className="mt-auto">
                        <Badge variant="secondary">
                          {area.projects} Active Projects
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Success Stories"
              subtitle="Real stories of impact from our community"
              centered
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Youth Exchange Program",
                  story:
                    "How our exchange program transformed 50 young lives across continents",
                  image: "/stories/youth-exchange.jpg",
                  author: "Maria Rodriguez",
                  role: "Program Director",
                },
                {
                  title: "Local Business Mentorship",
                  story:
                    "Supporting small businesses through expert guidance and resources",
                  image: "/stories/mentorship.jpg",
                  author: "John Chen",
                  role: "Business Committee Chair",
                },
                {
                  title: "Community Health Initiative",
                  story:
                    "Providing essential healthcare services to underserved areas",
                  image: "/stories/health-initiative.jpg",
                  author: "Dr. Sarah Johnson",
                  role: "Health Services Lead",
                },
              ].map((story) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group">
                    <div className="relative h-56">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                      <p className="text-gray-600 mb-4">{story.story}</p>
                      <div className="flex items-center mt-auto">
                        <div className="ml-3">
                          <p className="font-semibold">{story.author}</p>
                          <p className="text-sm text-gray-500">{story.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Upcoming Events"
              subtitle="Join us in making a difference"
              centered
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Annual Charity Gala",
                  date: "March 15, 2024",
                  time: "6:00 PM",
                  location: "Grand Hotel",
                  category: "Fundraising",
                  image: "/events/gala.jpg",
                },
                {
                  title: "Community Service Day",
                  date: "March 20, 2024",
                  time: "9:00 AM",
                  location: "City Park",
                  category: "Service",
                  image: "/events/service.jpg",
                },
                {
                  title: "Leadership Workshop",
                  date: "March 25, 2024",
                  time: "2:00 PM",
                  location: "Innovation Center",
                  category: "Training",
                  image: "/events/workshop.jpg",
                },
              ].map((event) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-shadow duration-300">
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
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center">
                          <Icon name="calendar" className="w-5 h-5 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="clock" className="w-5 h-5 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="location" className="w-5 h-5 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="mt-4 w-full group-hover:bg-blue-50"
                      >
                        Register Now
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Why Join Our Club?"
              subtitle="Discover the benefits of being a member"
              centered
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Networking Opportunities",
                  description: "Connect with business and community leaders",
                  icon: "network",
                },
                {
                  title: "Professional Development",
                  description:
                    "Access to leadership training and skill development",
                  icon: "growth",
                },
                {
                  title: "Community Impact",
                  description: "Make a difference in your local community",
                  icon: "community",
                },
                {
                  title: "Global Connections",
                  description: "Connect with members worldwide",
                  icon: "globe",
                },
                {
                  title: "Service Projects",
                  description: "Participate in meaningful service initiatives",
                  icon: "hands",
                },
                {
                  title: "Recognition",
                  description: "Gain recognition for your contributions",
                  icon: "award",
                },
              ].map((benefit) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Icon
                          name={benefit.icon}
                          className="w-6 h-6 text-blue-600"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="primary" size="lg">
                Become a Member
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section - Redesigned */}
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
                  Stay Connected
                </h2>
              </TextReveal>
              <p className="text-white/90 mb-8">
                Subscribe to our newsletter for updates on projects, events, and
                opportunities to serve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <TextReveal>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
            </TextReveal>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in our mission to create lasting change in communities
              around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                Join Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
