import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Menu, 
  X,
  Home,
  BookOpen,
  Award,
  Crown,
  Users,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-black dark:text-white">Recomm<span className="text-gray-500">read</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-500">
                <Home className="mr-1 h-4 w-4" /> Home
              </Link>
              <Link to="/books" className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-500">
                <BookOpen className="mr-1 h-4 w-4" /> Books
              </Link>
              <Link to="/contests" className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-500">
                <Award className="mr-1 h-4 w-4" /> Contests
              </Link>
              <Link to="/megavotes" className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-500">
                <Crown className="mr-1 h-4 w-4" /> Megavotes
              </Link>
              <Link to="/memberships" className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-500">
                <Users className="mr-1 h-4 w-4" /> Memberships
              </Link>
              <Link to="/leaderboard" className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-500">
                <Star className="mr-1 h-4 w-4" /> Leaderboard
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Join Now</Button>
            </Link>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>GU</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      {isSearchOpen && (
        <div className="py-3 px-4 border-t border-gray-200 dark:border-gray-800 fade-in">
          <div className="max-w-3xl mx-auto flex items-center">
            <Input 
              type="search" 
              placeholder="Search for books, authors, or stories..." 
              className="flex-grow"
              autoFocus
            />
            <Button className="ml-2">Search</Button>
          </div>
        </div>
      )}
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-800">
            <Link to="/" className="flex items-center px-3 py-2 text-base font-medium hover:text-gray-500">
              <Home className="mr-2 h-5 w-5" /> Home
            </Link>
            <Link to="/books" className="flex items-center px-3 py-2 text-base font-medium hover:text-gray-500">
              <BookOpen className="mr-2 h-5 w-5" /> Books
            </Link>
            <Link to="/contests" className="flex items-center px-3 py-2 text-base font-medium hover:text-gray-500">
              <Award className="mr-2 h-5 w-5" /> Contests
            </Link>
            <Link to="/megavotes" className="flex items-center px-3 py-2 text-base font-medium hover:text-gray-500">
              <Crown className="mr-2 h-5 w-5" /> Megavotes
            </Link>
            <Link to="/memberships" className="flex items-center px-3 py-2 text-base font-medium hover:text-gray-500">
              <Users className="mr-2 h-5 w-5" /> Memberships
            </Link>
            <Link to="/leaderboard" className="flex items-center px-3 py-2 text-base font-medium hover:text-gray-500">
              <Star className="mr-2 h-5 w-5" /> Leaderboard
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center px-5">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>GU</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <div className="text-base font-medium">Guest User</div>
                <div className="text-sm font-medium text-gray-500">guest@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link to="/signin">
                <Button variant="outline" className="w-full justify-center">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full justify-center">Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
