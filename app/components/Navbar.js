"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/rotary-logo.png"
                alt="Rotary Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Rotary
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/about" isScrolled={isScrolled}>
              About Us
            </NavLink>
            <NavLink href="/news" isScrolled={isScrolled}>
              News
            </NavLink>
            <NavLink href="/events" isScrolled={isScrolled}>
              Events
            </NavLink>
            <NavLink href="/bulletins" isScrolled={isScrolled}>
              Bulletins
            </NavLink>
            <Button variant="primary" size="md">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
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
          <div className="md:hidden py-4 bg-white rounded-lg shadow-lg mt-2">
            <NavLink href="/about" mobile>
              About Us
            </NavLink>
            <NavLink href="/news" mobile>
              News
            </NavLink>
            <NavLink href="/events" mobile>
              Events
            </NavLink>
            <NavLink href="/bulletins" mobile>
              Bulletins
            </NavLink>
            <div className="px-4 pt-4">
              <Button variant="primary" size="md" className="w-full">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, isScrolled, mobile }) {
  return (
    <Link
      href={href}
      className={`
        ${
          mobile
            ? "block px-4 py-2 text-gray-800 hover:bg-gray-50"
            : `font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary-600"
                  : "text-white/90 hover:text-white"
              }`
        }
      `}
    >
      {children}
    </Link>
  );
}
