import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

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
    },
    {
      id: 2,
      title: "Community Clean-up Drive",
      date: "April 20, 2024",
      time: "8:00 AM",
      location: "City Park",
      image: "/events/cleanup.jpg",
      description: "Help us make our community cleaner and greener.",
      category: "Community Service",
    },
    // Add more events as needed
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl">
              Join us in making a difference in our community
            </p>
          </div>
        </section>

        {/* Calendar View */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600 mb-4">
                        {event.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <p>📅 {event.date}</p>
                        <p>⏰ {event.time}</p>
                        <p>📍 {event.location}</p>
                      </div>
                      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
