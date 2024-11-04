import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function BulletinsPage() {
  const bulletins = [
    {
      id: 1,
      title: "March 2024 Newsletter",
      date: "March 1, 2024",
      thumbnail: "/bulletins/march-2024.jpg",
      description: "Monthly update on our projects and achievements",
      fileSize: "2.4 MB",
    },
    {
      id: 2,
      title: "February 2024 Newsletter",
      date: "February 1, 2024",
      thumbnail: "/bulletins/feb-2024.jpg",
      description: "Coverage of our community outreach programs",
      fileSize: "2.1 MB",
    },
    // Add more bulletins
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bulletins</h1>
            <p className="text-xl">
              Stay informed with our monthly newsletters and updates
            </p>
          </div>
        </section>

        {/* Bulletins Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bulletins.map((bulletin) => (
                <div
                  key={bulletin.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={bulletin.thumbnail}
                      alt={bulletin.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{bulletin.title}</h3>
                    <p className="text-gray-600 mb-4">{bulletin.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{bulletin.date}</span>
                      <span>{bulletin.fileSize}</span>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Download PDF
                      </button>
                      <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        Read Online
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
