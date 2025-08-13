import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-navy text-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Technexus Solutions" className="h-15 w-29" />
              <div className="font-playfair">
                <h3 className="text-lg font-bold">Technexus</h3>
                <p className="text-sm text-luxury-gray -mt-1">Solutions Limited</p>
              </div>
            </div>
            <p className="text-luxury-gray leading-relaxed">
              Premium technology solutions for modern businesses. We deliver exceptional 
              web development, fire & safety services, and VoIP solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-playfair">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-luxury-gray hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-luxury-gray hover:text-luxury-gold transition-colors">Services</Link></li>
              <li><Link to="/store" className="text-luxury-gray hover:text-luxury-gold transition-colors">SaaS Store</Link></li>
              <li><Link to="/contact" className="text-luxury-gray hover:text-luxury-gold transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-luxury-gray hover:text-luxury-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-playfair">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-luxury-gray">Web Development</span></li>
              <li><span className="text-luxury-gray">Fire & Safety Services</span></li>
              <li><span className="text-luxury-gray">VoIP Solutions</span></li>
              <li><span className="text-luxury-gray">Call Center Setup</span></li>
              <li><span className="text-luxury-gray">IP PBX Systems</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-playfair">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-luxury-gray">info@technexus.icu</p>
                  <p className="text-luxury-gray">support@technexus.icu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-luxury-gray">+1 (555) 123-4567</p>
                  <p className="text-luxury-gray">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <p className="text-luxury-gray">
                  Katampe Estate Phase3<br />
                  Kado, Jiru 900108, Federal Capital Territory
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-navy-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-luxury-gray text-sm">
              © {currentYear} Technexus Solutions Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;