import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl">
              Together we see a world where people unite and take action to
              create lasting change
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We provide service to others, promote integrity, and advance
                  world understanding, goodwill, and peace through our
                  fellowship of business, professional, and community leaders.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Together, we see a world where people unite and take action to
                  create lasting change — across the globe, in our communities,
                  and in ourselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Fellowship",
                  description: "Building lifelong relationships",
                },
                {
                  title: "Integrity",
                  description: "Honoring our commitments",
                },
                {
                  title: "Diversity",
                  description: "Connecting diverse perspectives",
                },
                {
                  title: "Service",
                  description: "Making a difference in communities",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  position: "President",
                  image: "/team/president.jpg",
                },
                {
                  name: "Jane Smith",
                  position: "Vice President",
                  image: "/team/vice-president.jpg",
                },
                {
                  name: "Mike Johnson",
                  position: "Secretary",
                  image: "/team/secretary.jpg",
                },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a global network of leaders who are making positive
              changes in communities around the world.
            </p>
            <a
              href="/volunteer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Member
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
