"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const predefinedAmounts = [100, 500, 1000, 5000];

  const handleDonation = async (e) => {
    e.preventDefault();
    // Here you would integrate with your payment gateway
    console.log("Processing donation:", { amount, paymentMethod });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Make a Donation
            </h1>
            <p className="text-gray-600 mb-8">
              Your contribution helps us make a difference in our community. All
              donations are tax-deductible.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <form onSubmit={handleDonation}>
                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-4">
                    Select Donation Amount
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {predefinedAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`py-3 px-4 rounded-lg border ${
                          amount === preset.toString()
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 hover:border-blue-500"
                        }`}
                        onClick={() => {
                          setAmount(preset.toString());
                          setIsCustomAmount(false);
                        }}
                      >
                        ₱{preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={isCustomAmount}
                        onChange={(e) => {
                          setIsCustomAmount(e.target.checked);
                          if (!e.target.checked) setAmount("");
                        }}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">
                        Enter custom amount
                      </span>
                    </label>
                    {isCustomAmount && (
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    )}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-4">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["GCash", "Credit Card", "Alipay"].map((method) => (
                      <button
                        key={method}
                        type="button"
                        className={`py-3 px-4 rounded-lg border ${
                          paymentMethod === method
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 hover:border-blue-500"
                        }`}
                        onClick={() => setPaymentMethod(method)}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!amount || !paymentMethod}
                  className={`w-full py-3 px-4 rounded-lg font-bold ${
                    amount && paymentMethod
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Donate ₱{amount ? parseFloat(amount).toLocaleString() : "0"}
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Other Ways to Support
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  For large donations or corporate sponsorships, please contact
                  our development team at{" "}
                  <a
                    href="mailto:donations@rotary.org"
                    className="text-blue-600 hover:underline"
                  >
                    donations@rotary.org
                  </a>
                </p>
                <p>
                  You can also mail checks to:
                  <br />
                  Rotary Organization
                  <br />
                  123 Rotary Street
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
