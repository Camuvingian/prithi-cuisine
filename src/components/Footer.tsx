import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-prithi-darker border-t border-prithi-charcoal/50">
      {/* Offer Banner */}
      <div className="bg-gradient-to-r from-prithi-orange/10 via-prithi-copper/10 to-prithi-orange/10 border-b border-prithi-orange/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="text-prithi-orange font-semibold">Special Offer:</span>
          <span className="text-prithi-cream text-xs sm:text-sm">
            10% discount on collection over £10 | Free delivery over £15
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-heading text-3xl font-bold text-prithi-blue text-glow">
                prithi
              </span>
            </Link>
            <p className="mt-4 text-prithi-gray text-sm leading-relaxed">
              Contemporary Bangladeshi and Indian cuisine. Recreating distinct and authentic
              home-cooked flavours through clay ovens and open flames.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/prithicuisine/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-prithi-charcoal flex items-center justify-center text-prithi-gray hover:text-prithi-blue hover:bg-prithi-blue/10 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-prithi-charcoal flex items-center justify-center text-prithi-gray hover:text-prithi-purple hover:bg-prithi-purple/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-prithi-charcoal flex items-center justify-center text-prithi-gray hover:text-prithi-orange hover:bg-prithi-orange/10 transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-prithi-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-prithi-gray hover:text-prithi-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-prithi-white mb-6">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-prithi-gray gap-2">
                <span className="shrink-0">Sunday</span>
                <span className="text-prithi-cream text-right text-xs sm:text-sm">12-2:30 & 6-11</span>
              </li>
              <li className="flex justify-between text-prithi-gray gap-2">
                <span className="shrink-0">Mon-Thu</span>
                <span className="text-prithi-cream text-right text-xs sm:text-sm">6:00-11:00 PM</span>
              </li>
              <li className="flex justify-between text-prithi-gray gap-2">
                <span className="shrink-0">Fri-Sat</span>
                <span className="text-prithi-cream text-right text-xs sm:text-sm">6:00-11:30 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-prithi-purple flex items-center gap-1">
              <Clock size={12} />
              Open 7 days a week
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-prithi-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-prithi-gray">
                <MapPin size={16} className="text-prithi-orange mt-0.5 shrink-0" />
                <span>285 Ewell Rd, Surbiton KT6 7AB, United Kingdom</span>
              </li>
              <li>
                <a
                  href="tel:+442083990030"
                  className="flex items-center gap-3 text-prithi-gray hover:text-prithi-orange transition-colors"
                >
                  <Phone size={16} className="text-prithi-orange shrink-0" />
                  020 8399 0030
                </a>
              </li>
              <li>
                <a
                  href="tel:+442083993904"
                  className="flex items-center gap-3 text-prithi-gray hover:text-prithi-orange transition-colors"
                >
                  <Phone size={16} className="text-prithi-orange shrink-0" />
                  020 8399 3904
                </a>
              </li>
              <li>
                <a
                  href="mailto:contactus@prithicuisine.com"
                  className="flex items-center gap-3 text-prithi-gray hover:text-prithi-orange transition-colors"
                >
                  <Mail size={16} className="text-prithi-orange shrink-0" />
                  contactus@prithicuisine.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-prithi-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-prithi-gray">
            &copy; {new Date().getFullYear()} Prithi Cuisine. All rights reserved.
          </p>
          <p className="text-xs text-prithi-gray">
            Contemporary Bangladeshi & Indian Restaurant, Surbiton
          </p>
        </div>
      </div>
    </footer>
  )
}
