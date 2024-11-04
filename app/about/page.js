import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-hero.jpg"
              alt="About Us Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Rotary
              </h1>
              <p className="text-xl text-white/90">
                Together we see a world where people unite and take action to
                create lasting change.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We provide service to others, promote integrity, and advance
                  world understanding, goodwill, and peace through our
                  fellowship of business, professional, and community leaders.
                </p>
              </Card>
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Together, we see a world where people unite and take action to
                  create lasting change — across the globe, in our communities,
                  and in ourselves.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Fellowship",
                  description: "Building lifelong relationships",
                  icon: "👥",
                },
                {
                  title: "Integrity",
                  description: "Honoring our commitments",
                  icon: "⭐",
                },
                {
                  title: "Diversity",
                  description: "Connecting diverse perspectives",
                  icon: "🌍",
                },
                {
                  title: "Service",
                  description: "Making a difference in communities",
                  icon: "🤝",
                },
              ].map((value) => (
                <Card
                  key={value.title}
                  className="p-6 text-center hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  position: "President",
                  image: "/team/president.jpg",
                  bio: "20+ years of community service experience",
                },
                {
                  name: "Jane Smith",
                  position: "Vice President",
                  image: "/team/vice-president.jpg",
                  bio: "Leading our international initiatives",
                },
                {
                  name: "Mike Johnson",
                  position: "Secretary",
                  image: "/team/secretary.jpg",
                  bio: "Coordinating our local programs",
                },
              ].map((member) => (
                <Card key={member.name} className="overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of a global network of leaders who are making positive
              changes in communities around the world.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg">
                Become a Member
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
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
