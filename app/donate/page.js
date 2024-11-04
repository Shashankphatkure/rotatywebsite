"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "../components/ui/TextReveal";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { Icon } from "../utils/heroIcons";

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [donationType, setDonationType] = useState("oneTime");

  const predefinedAmounts = [100, 500, 1000, 5000];
  const paymentMethods = [
    { id: "gcash", name: "GCash", icon: "gcash" },
    { id: "creditCard", name: "Credit Card", icon: "creditCard" },
    { id: "bank", name: "Bank Transfer", icon: "bank" },
  ];

  const handleDonation = async (e) => {
    e.preventDefault();
    // Here you would integrate with your payment gateway
    console.log("Processing donation:", {
      amount,
      paymentMethod,
      donationType,
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800"
          alt="Donate"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="container mx-auto px-4 relative z-10">
          <TextReveal>
            <h1 className="text-5xl font-bold text-white mb-4">
              Make a Donation
            </h1>
          </TextReveal>
          <p className="text-xl text-white/90 max-w-2xl">
            Your contribution helps us create lasting change in communities
            around the world.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Donation Form */}
              <div className="md:col-span-2">
                <Card className="p-6">
                  <form onSubmit={handleDonation}>
                    {/* Donation Type */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4">Donation Type</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          className={`p-4 rounded-lg border ${
                            donationType === "oneTime"
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200"
                          }`}
                          onClick={() => setDonationType("oneTime")}
                        >
                          <div className="font-semibold mb-1">One-time</div>
                          <div className="text-sm text-gray-600">
                            Single donation
                          </div>
                        </button>
                        <button
                          type="button"
                          className={`p-4 rounded-lg border ${
                            donationType === "monthly"
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200"
                          }`}
                          onClick={() => setDonationType("monthly")}
                        >
                          <div className="font-semibold mb-1">Monthly</div>
                          <div className="text-sm text-gray-600">
                            Recurring donation
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4">Select Amount</h3>
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
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4">Payment Method</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            className={`p-4 rounded-lg border ${
                              paymentMethod === method.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200"
                            }`}
                            onClick={() => setPaymentMethod(method.id)}
                          >
                            <Icon
                              name={method.icon}
                              className="w-6 h-6 mx-auto mb-2"
                            />
                            <div className="text-sm font-medium">
                              {method.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={!amount || !paymentMethod}
                    >
                      Donate ₱
                      {amount ? parseFloat(amount).toLocaleString() : "0"}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Donation Info */}
              <div className="md:col-span-1">
                <Card className="p-6 bg-gray-50 border-none">
                  <h3 className="text-lg font-bold mb-4">Your Impact</h3>
                  <div className="space-y-4">
                    <div>
                      <Badge variant="primary">₱500</Badge>
                      <p className="mt-2 text-sm text-gray-600">
                        Provides clean water to a family for one month
                      </p>
                    </div>
                    <div>
                      <Badge variant="primary">₱1,000</Badge>
                      <p className="mt-2 text-sm text-gray-600">
                        Supports education materials for 5 students
                      </p>
                    </div>
                    <div>
                      <Badge variant="primary">₱5,000</Badge>
                      <p className="mt-2 text-sm text-gray-600">
                        Funds a community health workshop
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Contact our donation support team:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Icon name="email" className="w-4 h-4 mr-2" />
                        <a
                          href="mailto:donate@rotary.org"
                          className="text-blue-600"
                        >
                          donate@rotary.org
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Icon name="phone" className="w-4 h-4 mr-2" />
                        <a href="tel:+1234567890" className="text-blue-600">
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
