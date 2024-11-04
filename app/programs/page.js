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

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Education", "Health", "Environment", "Peace"];

  const projects = [
    {
      title: "Clean Water Initiative",
      category: "Environment",
      description: "Providing clean water access to rural communities",
      image:
        "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800",
      progress: 75,
      target: "$50,000",
      raised: "$37,500",
      location: "East Africa",
      impact: "10,000 people served",
    },
    {
      title: "Youth Education Program",
      category: "Education",
      description:
        "Supporting underprivileged students with education resources",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      progress: 60,
      target: "$30,000",
      raised: "$18,000",
      location: "South Asia",
      impact: "500 students supported",
    },
    // Add more projects...
  ];

  const volunteerOpportunities = [
    {
      title: "Project Coordinator",
      commitment: "10 hours/week",
      location: "Various Locations",
      skills: ["Leadership", "Project Management", "Communication"],
      icon: "clipboard",
    },
    {
      title: "Community Outreach",
      commitment: "5 hours/week",
      location: "Local Communities",
      skills: ["Communication", "Social Media", "Event Planning"],
      icon: "users",
    },
    // Add more opportunities...
  ];

  const impactStories = [
    {
      title: "Transforming Lives Through Education",
      author: "Maria Rodriguez",
      role: "Education Program Lead",
      story:
        "Through our education initiative, we've helped over 500 students...",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
      quote:
        "Education is the most powerful weapon we can use to change the world.",
    },
    // Add more stories...
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800"
          alt="Our Programs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="container mx-auto px-4 relative z-10">
          <TextReveal>
            <h1 className="text-5xl font-bold text-white mb-4">Our Programs</h1>
          </TextReveal>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover how we're making a difference through our various
            initiatives and projects.
          </p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-8 bg-white border-b sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2">
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
      </section>

      {/* Current Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Current Projects"
            subtitle="Join us in making a difference"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {projects
              .filter(
                (project) =>
                  selectedCategory === "All" ||
                  project.category === selectedCategory
              )
              .map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        variant="primary"
                        className="absolute top-4 right-4"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="space-y-4">
                        <div>
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
                          <span>Target: {project.target}</span>
                          <span>Raised: {project.raised}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center">
                            <Icon name="location" className="w-4 h-4 mr-1" />
                            {project.location}
                          </span>
                          <span className="flex items-center">
                            <Icon name="users" className="w-4 h-4 mr-1" />
                            {project.impact}
                          </span>
                        </div>
                      </div>
                      <Button variant="primary" className="w-full mt-6">
                        Support Project
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="volunteer" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Get Involved"
            subtitle="Ways you can contribute to our mission"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {volunteerOpportunities.map((opportunity) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Icon
                        name={opportunity.icon}
                        className="w-6 h-6 text-blue-600"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {opportunity.title}
                      </h3>
                      <div className="space-y-2 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Icon name="clock" className="w-4 h-4 mr-2" />
                          {opportunity.commitment}
                        </div>
                        <div className="flex items-center">
                          <Icon name="location" className="w-4 h-4 mr-2" />
                          {opportunity.location}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              Apply to Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Impact Stories"
            subtitle="Real stories of change from our community"
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {impactStories.map((story) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-full min-h-[300px]">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                      <p className="text-gray-600 mb-4">{story.story}</p>
                      <blockquote className="italic text-gray-600 border-l-4 border-blue-600 pl-4 mb-4">
                        "{story.quote}"
                      </blockquote>
                      <div>
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

      {/* CTA Section */}
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
        <div className="container mx-auto px-4 relative z-10 text-center">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
          </TextReveal>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create positive change. Whether through
            volunteering, donations, or spreading awareness, every contribution
            matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Start Volunteering
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              Make a Donation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
