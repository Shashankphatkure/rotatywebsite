"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "../components/ui/TextReveal";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { Icon } from "../utils/heroIcons";
import MainLayout from "../layouts/MainLayout";

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [donationType, setDonationType] = useState("oneTime");
  const [donationPurpose, setDonationPurpose] = useState("general");

  const predefinedAmounts = [100, 500, 1000, 5000];
  const paymentMethods = [
    { id: "gcash", name: "GCash", icon: "gcash" },
    { id: "creditCard", name: "Credit Card", icon: "creditCard" },
    { id: "bank", name: "Bank Transfer", icon: "bank" },
    { id: "paypal", name: "PayPal", icon: "paypal" },
  ];

  const donationPurposes = [
    {
      id: "general",
      name: "General Fund",
      description: "Support all our initiatives",
    },
    {
      id: "education",
      name: "Education",
      description: "Support educational programs",
    },
    {
      id: "health",
      name: "Healthcare",
      description: "Support health initiatives",
    },
    {
      id: "environment",
      name: "Environment",
      description: "Support environmental projects",
    },
  ];

  const impactMetrics = [
    {
      amount: 500,
      description: "Provides clean water to a family for one month",
    },
    {
      amount: 1000,
      description: "Supports education materials for 5 students",
    },
    { amount: 5000, description: "Funds a community health workshop" },
    { amount: 10000, description: "Helps build a classroom in rural areas" },
  ];

  const handleDonation = async (e) => {
    e.preventDefault();
    // Here you would integrate with your payment gateway
    console.log("Processing donation:", {
      amount,
      paymentMethod,
      donationType,
      donationPurpose,
    });
  };

  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800"
            alt="Donate"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <TextReveal>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Make a Difference Today
                </h1>
              </TextReveal>
              <p className="text-xl text-white/90 mb-8">
                Your contribution helps us create lasting change in communities
                around the world. Every donation, no matter the size, makes an
                impact.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    window.scrollTo({ top: 800, behavior: "smooth" })
                  }
                >
                  Donate Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "10K+", label: "Donors" },
                { value: "$2M+", label: "Raised" },
                { value: "50+", label: "Projects" },
                { value: "100K+", label: "Lives Impacted" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Donation Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Donation Form */}
                <div className="md:col-span-2">
                  <Card className="p-6">
                    <form onSubmit={handleDonation}>
                      {/* Donation Purpose */}
                      <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4">
                          Choose Your Impact
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {donationPurposes.map((purpose) => (
                            <button
                              key={purpose.id}
                              type="button"
                              className={`p-4 rounded-lg border text-left ${
                                donationPurpose === purpose.id
                                  ? "border-blue-600 bg-blue-50"
                                  : "border-gray-200"
                              }`}
                              onClick={() => setDonationPurpose(purpose.id)}
                            >
                              <div className="font-semibold mb-1">
                                {purpose.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {purpose.description}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Donation Type */}
                      <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4">
                          Donation Type
                        </h3>
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
                        <h3 className="text-lg font-bold mb-4">
                          Select Amount
                        </h3>
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
                            <div className="mt-2">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                  ₱
                                </span>
                                <input
                                  type="number"
                                  value={amount}
                                  onChange={(e) => setAmount(e.target.value)}
                                  placeholder="Enter amount"
                                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4">
                          Payment Method
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                        {donationType === "monthly" && " Monthly"}
                      </Button>
                    </form>
                  </Card>
                </div>

                {/* Donation Info */}
                <div className="md:col-span-1">
                  <Card className="p-6 bg-gray-50 border-none sticky top-24">
                    <h3 className="text-lg font-bold mb-4">Your Impact</h3>
                    <div className="space-y-4">
                      {impactMetrics.map((impact) => (
                        <div key={impact.amount}>
                          <Badge variant="primary">
                            ₱{impact.amount.toLocaleString()}
                          </Badge>
                          <p className="mt-2 text-sm text-gray-600">
                            {impact.description}
                          </p>
                        </div>
                      ))}
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

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Tax Deductible</h4>
                      <p className="text-sm text-gray-600">
                        All donations are tax-deductible. You will receive a
                        receipt for your records.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto grid gap-6">
              {[
                {
                  question: "How is my donation used?",
                  answer:
                    "Your donation directly supports our community projects, with 90% of funds going directly to programs.",
                },
                {
                  question: "Is my donation secure?",
                  answer:
                    "Yes, we use industry-standard encryption and secure payment processors to protect your information.",
                },
                {
                  question: "Can I cancel my monthly donation?",
                  answer:
                    "Yes, you can cancel or modify your monthly donation at any time through your donor dashboard.",
                },
                // Add more FAQs...
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
