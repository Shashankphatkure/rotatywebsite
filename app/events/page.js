import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "April 15, 2024",
      time: "6:00 PM",
      location: "Grand Ballroom, City Hotel",
      image: "/events/gala.jpg",
      description:
        "Join us for an evening of celebration and fundraising for our community projects.",
      category: "Fundraising",
      attendees: 120,
    },
    // Add more events...
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/events/hero-bg.jpg"
              alt="Events Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Upcoming Events
            </h1>
            <p className="text-xl text-white/90">
              Join us in making a difference in our community
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="primary" className="mb-4">
                      {event.category}
                    </Badge>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <p className="flex items-center">
                        <span className="mr-2">📅</span> {event.date}
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">⏰</span> {event.time}
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">📍</span> {event.location}
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">👥</span> {event.attendees}{" "}
                        attending
                      </p>
                    </div>
                    <Button variant="primary" className="w-full">
                      Register Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
