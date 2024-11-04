import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

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
    },
    {
      id: 2,
      title: "New Community Center Opens",
      date: "March 10, 2024",
      image: "/news/community-center.jpg",
      excerpt:
        "The newly constructed community center will serve as a hub for educational programs and community gatherings.",
      category: "Projects",
    },
    // Add more news articles here
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest News</h1>
            <p className="text-xl">
              Stay updated with our recent activities and announcements
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Categories Filter */}
            <div className="mb-8 flex flex-wrap gap-4">
              <button className="px-4 py-2 rounded-full bg-blue-600 text-white">
                All
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
                Events
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
                Projects
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
                Updates
              </button>
            </div>

            {/* News Articles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-blue-600">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <a
                      href={`/news/${article.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                  1
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                  3
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
