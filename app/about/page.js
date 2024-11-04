"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "../components/ui/TextReveal";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import { Icon } from "../utils/heroIcons";
import Badge from "../components/ui/Badge";

export default function About() {
  return (
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
      <section id="history" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our History"
            subtitle="A legacy of service since 1974"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">50 Years of Impact</h3>
              <p className="text-gray-600 mb-6">
                Founded in 1974, our club has been at the forefront of community
                service and humanitarian initiatives. What started as a small
                group of dedicated individuals has grown into a powerful force
                for positive change.
              </p>
              <div className="space-y-4">
                {[1974, 1985, 1999, 2010, 2024].map((year) => (
                  <div key={year} className="flex items-start">
                    <Badge variant="primary" className="mt-1">
                      {year}
                    </Badge>
                    <p className="ml-4 text-gray-600">
                      {/* Add milestone descriptions */}
                      Major milestone description for {year}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60"
                alt="Our History"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
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
                  Together, we see a world where people unite and take action to
                  create lasting change — across the globe, in our communities,
                  and in ourselves.
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
                description: "Embracing different perspectives and backgrounds",
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
                    <Icon name={value.icon} className="w-6 h-6 text-blue-600" />
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
  );
}
