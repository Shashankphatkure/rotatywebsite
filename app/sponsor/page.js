import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function SponsorPage() {
  const sponsorshipLevels = [
    {
      level: "Platinum",
      amount: "₱100,000",
      benefits: [
        "Premium logo placement on website",
        "VIP access to all events",
        "Recognition in all publications",
        "Dedicated social media features",
        "Speaking opportunities at events",
        "Custom partnership opportunities",
      ],
      featured: true,
    },
    {
      level: "Gold",
      amount: "₱50,000",
      benefits: [
        "Logo placement on website",
        "Access to major events",
        "Recognition in publications",
        "Social media mentions",
        "Networking opportunities",
      ],
    },
    {
      level: "Silver",
      amount: "₱25,000",
      benefits: [
        "Logo placement on website",
        "Event invitations",
        "Recognition in newsletters",
        "Networking opportunities",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Become a Sponsor
            </h1>
            <p className="text-xl">
              Partner with us to make a lasting impact in our community
            </p>
          </div>
        </section>

        {/* Sponsorship Levels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Sponsorship Opportunities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {sponsorshipLevels.map((level) => (
                  <div
                    key={level.level}
                    className={`rounded-lg shadow-lg overflow-hidden ${
                      level.featured
                        ? "border-2 border-blue-600 transform md:-translate-y-4"
                        : ""
                    }`}
                  >
                    <div
                      className={`p-6 ${
                        level.featured ? "bg-blue-600 text-white" : "bg-white"
                      }`}
                    >
                      <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                      <p className="text-3xl font-bold mb-4">{level.amount}</p>
                      <ul className="space-y-3">
                        {level.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <svg
                              className={`h-6 w-6 mr-2 ${
                                level.featured ? "text-white" : "text-blue-600"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors ${
                          level.featured
                            ? "bg-white text-blue-600 hover:bg-gray-100"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        Select {level.level}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Current Sponsors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((sponsor) => (
                <div
                  key={sponsor}
                  className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center"
                >
                  <div className="relative w-full h-20">
                    <Image
                      src={`/sponsors/sponsor-${sponsor}.png`}
                      alt={`Sponsor ${sponsor}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in becoming a sponsor?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our sponsorship team to discuss custom partnership
              opportunities that align with your organization's goals.
            </p>
            <a
              href="mailto:sponsorship@rotary.org"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Sponsorship Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
