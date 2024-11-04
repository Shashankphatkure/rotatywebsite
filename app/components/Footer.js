import Link from "next/link";
import Image from "next/image";
import { Icon } from "../utils/heroIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About Us",
      links: [
        { label: "Our History", href: "/about#history" },
        { label: "Leadership", href: "/about#leadership" },
        { label: "Mission & Vision", href: "/about#mission" },
        { label: "Annual Reports", href: "/about#reports" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { label: "Become a Member", href: "/membership" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Donate", href: "/donate" },
        { label: "Partner With Us", href: "/partnership" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "News & Updates", href: "/news" },
        { label: "Events Calendar", href: "/events" },
        { label: "Bulletins", href: "/bulletins" },
        { label: "Photo Gallery", href: "/gallery" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
        { label: "Find a Club", href: "/clubs" },
        { label: "Support", href: "/support" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "facebook", href: "#", label: "Facebook" },
    { icon: "twitter", href: "#", label: "Twitter" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
    { icon: "youtube", href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo.png"
                alt="Rotary Club Logo"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <span className="font-bold text-xl">Rotary Club</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Service Above Self - Join us in making a difference in communities
              worldwide through humanitarian service and ethical leadership.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Rotary Club. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
