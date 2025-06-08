import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "@package/ui/icon";
import { Button, Input } from "@package/ui/component";




export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* About Us */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-4">Local Ha Giang Tours</h3>
            <p className="text-gray-300 mb-4 text-xs">
              Experience the breathtaking landscapes and rich culture of Ha Giang with our expert local guides.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-gray-300input hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/tours" className="text-gray-300 hover:text-white transition-colors text-xs">Tours</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors text-xs">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-xs">Blog</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-xs">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-xs">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-gray-400" size={16}/>
                <span className="text-gray-300 text-xs">Ha Giang City, Ha Giang Province, Vietnam</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-gray-400" size={16}/>
                <a href="tel:+84123456789" className="text-gray-300 hover:text-white transition-colors text-xs">+84 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-gray-400" size={16}/>
                <a href="mailto:info@hagianglocaltours.com" className="text-gray-300 text-xs hover:text-white transition-colors">info@hagianglocaltours.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-xs">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex space-y-2">
              <Input
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <Button
                type="submit" 
                variant={"outline"}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs mb-4 md:mb-0">
              &copy; {currentYear} Local Ha Giang Tours. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
