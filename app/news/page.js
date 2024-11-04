import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Annual Charity Gala Raises Record Funds",
      date: "March 15, 2024",
      image: "/news/gala.jpg",
      excerpt:
        "Our annual charity gala exceeded expectations, raising over ₱1 million for local community projects.",
      category: "Events",
      author: "John Smith",
      readTime: "5 min read",
    },
    // Add more news articles...
  ];

  const categories = ["All", "Events", "Projects", "Community", "Updates"];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/news/hero-bg.jpg"
              alt="News Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Latest News
            </h1>
            <p className="text-xl text-white/90">
              Stay updated with our recent activities and announcements
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="primary">{article.category}</Badge>
                      <span className="text-sm text-gray-500">
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
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
