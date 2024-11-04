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
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background with Parallax Effect */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{ scale: 1.1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/hero-bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ top: "20%", left: "10%" }}
            />
            <motion.div
              className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ bottom: "10%", right: "20%" }}
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Making a Difference Through Service
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Join us in creating lasting change across the globe, in our
                communities, and in ourselves.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10">Donate Now</span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Become a Member
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icon name="chevronDown" className="w-6 h-6 text-white" />
          </motion.div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { number: "1M+", label: "Lives Impacted", icon: "users" },
                { number: "150+", label: "Active Projects", icon: "document" },
                { number: "50+", label: "Countries Reached", icon: "globe" },
                { number: "10K+", label: "Volunteers", icon: "volunteer" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeIn}>
                  <Card className="p-6 text-center hover:scale-105 transition-transform duration-300">
                    <Icon
                      name={stat.icon}
                      className="w-8 h-8 mx-auto mb-4 text-blue-600"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl font-bold text-blue-600 mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Programs
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Community Development",
                  description:
                    "Building stronger communities through sustainable projects",
                  icon: "building",
                },
                {
                  title: "Youth Leadership",
                  description: "Empowering the next generation of leaders",
                  icon: "users",
                },
                {
                  title: "Health Initiatives",
                  description: "Promoting health and wellness in communities",
                  icon: "heart",
                },
              ].map((program) => (
                <motion.div key={program.title} variants={fadeIn}>
                  <Card className="p-6 hover:translate-y-[-4px] transition-all duration-300 group">
                    <div className="mb-4">
                      <Icon
                        name={program.icon}
                        className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Learn More →
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Stories Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Impact Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Building Schools in Rural Areas",
                  description:
                    "How we helped provide education to over 1,000 children",
                  image: "/stories/education.jpg",
                  category: "Education",
                },
                {
                  title: "Clean Water Initiative",
                  description: "Bringing clean water to communities in need",
                  image: "/stories/water.jpg",
                  category: "Health",
                },
              ].map((story) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full overflow-hidden group">
                    <div className="relative h-64">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 p-6 text-white">
                        <Badge variant="primary" className="mb-2">
                          {story.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2">
                          {story.title}
                        </h3>
                        <p className="text-white/80">{story.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Members Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Being part of Rotary has given me the opportunity to make a real difference in my community.",
                  author: "Sarah Johnson",
                  role: "Member since 2020",
                  image: "/testimonials/sarah.jpg",
                },
                {
                  quote:
                    "The connections and friendships I've made through Rotary are invaluable.",
                  author: "Michael Chen",
                  role: "Committee Head",
                  image: "/testimonials/michael.jpg",
                },
                {
                  quote:
                    "Rotary's impact on local communities is truly remarkable.",
                  author: "Emily Rodriguez",
                  role: "Volunteer",
                  image: "/testimonials/emily.jpg",
                },
              ].map((testimonial) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <svg
                        className="h-8 w-8 text-blue-600 mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <Button variant="outline">View All News</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Annual Charity Gala Raises Record Funds",
                  excerpt:
                    "This year's gala exceeded all expectations, raising over ₱1 million for local community projects.",
                  date: "March 15, 2024",
                  image: "/news/gala.jpg",
                  category: "Events",
                },
                // Add more news items...
              ].map((news) => (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="primary" className="mb-2">
                        {news.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{news.excerpt}</p>
                      <p className="text-sm text-gray-500">{news.date}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: 'url("/pattern.svg")',
              backgroundSize: "cover",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Connected
              </h2>
              <p className="text-white/90 mb-8">
                Subscribe to our newsletter and stay updated with our latest
                news and events.
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: 'url("/pattern.svg")',
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our community of change-makers and help us create lasting
                impact in communities around the world.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
