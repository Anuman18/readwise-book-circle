
import { Button } from '@/components/ui/button';
import { BookOpen, BookText, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your Next <span className="text-gray-500">Favorite</span> Read
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Join our community of book lovers where AI-powered recommendations help you find your perfect next read and share your own stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                <Search size={18} /> Explore Books
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <BookText size={18} /> Share Your Story
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-black"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Joined by 10,000+ readers & writers
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white dark:from-gray-900 dark:to-black rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-gray-200 to-white dark:from-gray-800 dark:to-black rounded-2xl transform -rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen size={120} className="text-gray-300 dark:text-gray-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-black p-4 rounded-lg shadow-lg glass-card">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <BookText size={20} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium">AI-Powered</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Recommendations</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white dark:bg-black p-4 rounded-lg shadow-lg glass-card">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Search size={20} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium">Find Books</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">By Title or Author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
