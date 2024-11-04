"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12">
              <Image
                src="/rotary-logo.png"
                alt="Rotary Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="ml-3 text-xl font-bold text-blue-600">
              Rotary Organization
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/news"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              News
            </Link>
            <Link
              href="/events"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Events
            </Link>
            <Link
              href="/bulletins"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Bulletins
            </Link>
            <Link
              href="/donate"
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/about"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              href="/news"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              News
            </Link>
            <Link
              href="/events"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Events
            </Link>
            <Link
              href="/bulletins"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Bulletins
            </Link>
            <Link
              href="/donate"
              className="block py-2 text-blue-600 font-semibold"
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
