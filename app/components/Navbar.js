"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../utils/heroIcons";
import Button from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      submenu: [
        { label: "Our History", href: "/about#history" },
        { label: "Leadership", href: "/about#leadership" },
        { label: "Mission & Vision", href: "/about#mission" },
      ],
    },
    {
      label: "Programs",
      href: "/programs",
      submenu: [
        { label: "Current Projects", href: "/programs#projects" },
        { label: "Get Involved", href: "/programs#volunteer" },
        { label: "Impact Stories", href: "/programs#impact" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Bulletins", href: "/bulletins" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-auto h-10"
            />
            <span
              className={`font-bold text-xl ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              Club of Sta Rosa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  <span className="flex items-center">
                    {item.label}
                    {item.submenu && (
                      <Icon
                        name="chevronDown"
                        className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform"
                      />
                    )}
                  </span>
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2 bg-white rounded-lg shadow-xl">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/donate">
              <Button
                variant={isScrolled ? "primary" : "outline"}
                className={
                  !isScrolled && "text-white border-white hover:bg-white/10"
                }
                size="lg"
              >
                <Icon name="heart" className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon
              name={isMobileMenuOpen ? "x" : "menu"}
              className={`w-6 h-6 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href="/donate"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="primary" className="w-full">
                      <Icon name="heart" className="w-4 h-4 mr-2" />
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
