
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail,
  BookOpen
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-black dark:text-white">Recomm<span className="text-gray-500">read</span></span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Your community for book lovers and storytellers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Home</Link></li>
              <li><Link to="/books" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Books</Link></li>
              <li><Link to="/contests" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Contests</Link></li>
              <li><Link to="/megavotes" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Megavotes</Link></li>
              <li><Link to="/memberships" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Memberships</Link></li>
              <li><Link to="/leaderboard" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Leaderboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Writing Guidelines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Community Rules</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">API Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Stay updated with our latest books and contests.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Recommread. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
