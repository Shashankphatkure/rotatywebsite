import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Making a Difference Through Service
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Join us in creating lasting change across the globe, in our
                communities, and in ourselves.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  Donate Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  Become a Member
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "1M+", label: "Lives Impacted" },
                { number: "150+", label: "Active Projects" },
                { number: "50+", label: "Countries Reached" },
                { number: "10K+", label: "Volunteers" },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Community Development",
                  description:
                    "Building stronger communities through sustainable projects",
                  icon: "🏘️",
                },
                {
                  title: "Youth Leadership",
                  description: "Empowering the next generation of leaders",
                  icon: "👥",
                },
                {
                  title: "Health Initiatives",
                  description: "Promoting health and wellness in communities",
                  icon: "🏥",
                },
              ].map((program) => (
                <Card
                  key={program.title}
                  className="p-6 hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button variant="ghost" size="sm">
                    Learn More →
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest Updates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  type: "News",
                  title: "Annual Charity Gala Success",
                  date: "March 15, 2024",
                },
                {
                  type: "Event",
                  title: "Community Clean-up Drive",
                  date: "March 20, 2024",
                },
                {
                  type: "Bulletin",
                  title: "Monthly Newsletter",
                  date: "March 1, 2024",
                },
              ].map((update) => (
                <Card key={update.title} className="group cursor-pointer">
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">
                      {update.type}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {update.title}
                    </h3>
                    <div className="text-sm text-gray-500">{update.date}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
