import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Become a Member
            </h1>
            <p className="text-xl">Join our community of change-makers</p>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <form className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Areas of Interest
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Community Service",
                        "Youth Programs",
                        "Environmental Projects",
                        "Education Initiatives",
                        "Healthcare Programs",
                      ].map((area) => (
                        <label key={area} className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />
                          <span className="ml-2">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Why do you want to join Rotary?
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
