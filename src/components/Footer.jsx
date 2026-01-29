import React from 'react';
import { Link } from 'react-router-dom';
import { Dna, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dna className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">BIOmix</span>
            </div>
            <p className="text-gray-300 mb-4">
              Solutions OMICS & IA pour une agriculture et un environnement durables. 
              Nous transformons la science des données biologiques en innovations pratiques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">À propos</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/values" className="text-gray-300 hover:text-secondary transition-colors">Valeurs</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-secondary transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">contact@biomix.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 BIOmix. Tous droits réservés. | 
            <a href="#" className="hover:text-secondary transition-colors ml-1">Politique de confidentialité</a> | 
            <a href="#" className="hover:text-secondary transition-colors ml-1">Mentions légales</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

