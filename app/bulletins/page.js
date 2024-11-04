import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function BulletinsPage() {
  const bulletins = [
    {
      id: 1,
      title: "March 2024 Newsletter",
      date: "March 1, 2024",
      thumbnail: "/bulletins/march-2024.jpg",
      description: "Monthly update on our projects and achievements",
      fileSize: "2.4 MB",
      downloads: 156,
    },
    // Add more bulletins...
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/bulletins/hero-bg.jpg"
              alt="Bulletins Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Bulletins
            </h1>
            <p className="text-xl text-white/90">
              Stay informed with our monthly newsletters and updates
            </p>
          </div>
        </section>

        {/* Bulletins Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bulletins.map((bulletin) => (
                <Card key={bulletin.id} className="group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={bulletin.thumbnail}
                      alt={bulletin.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {bulletin.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{bulletin.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                      <span>{bulletin.date}</span>
                      <div className="flex items-center space-x-4">
                        <span>📥 {bulletin.downloads}</span>
                        <span>{bulletin.fileSize}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="primary" className="flex-1">
                        Download PDF
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Read Online
                      </Button>
                    </div>
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
