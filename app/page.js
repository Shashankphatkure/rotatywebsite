import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Rotary Organization
            </h1>
            <p className="text-xl mb-8">
              Making a difference in our community through service and
              leadership
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/sponsor"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Featured Updates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* News Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Latest News</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with our recent activities and announcements
                  </p>
                  <Link
                    href="/news"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Bulletins Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Bulletins</h3>
                  <p className="text-gray-600 mb-4">
                    Access our monthly bulletins and reports
                  </p>
                  <Link
                    href="/bulletins"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Bulletins →
                  </Link>
                </div>
              </div>

              {/* Events Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Upcoming Events
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join our community events and activities
                  </p>
                  <Link
                    href="/events"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    See Calendar →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
