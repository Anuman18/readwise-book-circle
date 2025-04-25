
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, RefreshCw, ThumbsUp } from 'lucide-react';

// Dummy book data
const dummyBooks = {
  fiction: [
    { id: 1, title: "The Silent Patient", author: "Alex Michaelides", rating: 4.5, votes: 23481, genre: "Psychological Thriller" },
    { id: 2, title: "Where the Crawdads Sing", author: "Delia Owens", rating: 4.8, votes: 18290, genre: "Literary Fiction" },
    { id: 3, title: "The Midnight Library", author: "Matt Haig", rating: 4.2, votes: 15622, genre: "Fantasy Fiction" },
    { id: 4, title: "Project Hail Mary", author: "Andy Weir", rating: 4.7, votes: 12045, genre: "Science Fiction" }
  ],
  nonFiction: [
    { id: 5, title: "Atomic Habits", author: "James Clear", rating: 4.9, votes: 28754, genre: "Self-Help" },
    { id: 6, title: "Educated", author: "Tara Westover", rating: 4.7, votes: 19843, genre: "Memoir" },
    { id: 7, title: "Sapiens", author: "Yuval Noah Harari", rating: 4.6, votes: 32187, genre: "History" },
    { id: 8, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", rating: 4.5, votes: 16789, genre: "Psychology" }
  ],
  personalRecommendations: [
    { id: 9, title: "The Book of Two Ways", author: "Jodi Picoult", rating: 4.3, votes: 9876, genre: "Contemporary Fiction" },
    { id: 10, title: "Klara and the Sun", author: "Kazuo Ishiguro", rating: 4.1, votes: 8721, genre: "Science Fiction" },
    { id: 11, title: "The Four Winds", author: "Kristin Hannah", rating: 4.6, votes: 12543, genre: "Historical Fiction" },
    { id: 12, title: "The Vanishing Half", author: "Brit Bennett", rating: 4.4, votes: 15632, genre: "Literary Fiction" }
  ]
};

const BookRecommendation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(dummyBooks.personalRecommendations);

  // Simulate AI recommendation refresh
  const refreshRecommendations = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      // Shuffle and get 4 random books
      const allBooks = [...dummyBooks.fiction, ...dummyBooks.nonFiction];
      const shuffled = [...allBooks].sort(() => 0.5 - Math.random());
      setRecommendations(shuffled.slice(0, 4));
      setIsLoading(false);
    }, 1500);
  };
  
  // Initial "loading" state when component mounts
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Book Recommendations</h2>
        <p className="section-subtitle text-center">
          Discover books tailored to your reading preferences
        </p>
        
        <Tabs defaultValue="personalized" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="personalized">For You</TabsTrigger>
              <TabsTrigger value="fiction">Fiction</TabsTrigger>
              <TabsTrigger value="nonFiction">Non-Fiction</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="personalized" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">AI-Powered Recommendations</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refreshRecommendations}
                disabled={isLoading}
                className="flex items-center gap-2"
              >
                <RefreshCw size={16} className={`${isLoading ? 'animate-spin' : ''}`} /> 
                Refresh
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {isLoading ? (
                // Loading state
                Array(4).fill(0).map((_, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-4"></div>
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-2 w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-4 w-1/2"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-1/3"></div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                // Recommendation cards
                recommendations.map((book) => (
                  <Card key={book.id} className="hover-scale bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-36 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                          <BookOpen size={32} className="text-gray-400" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{book.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {book.author}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{book.genre}</span>
                        <div className="flex items-center">
                          <ThumbsUp size={14} className="mr-1" />
                          <span className="text-sm">{book.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Our AI analyzes your reading history to provide personalized recommendations
              </p>
              <Button>View All Recommendations</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="fiction" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dummyBooks.fiction.map((book) => (
                <Card key={book.id} className="hover-scale bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-36 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                        <BookOpen size={32} className="text-gray-400" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{book.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {book.author}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{book.genre}</span>
                      <div className="flex items-center">
                        <ThumbsUp size={14} className="mr-1" />
                        <span className="text-sm">{book.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nonFiction" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dummyBooks.nonFiction.map((book) => (
                <Card key={book.id} className="hover-scale bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-36 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                        <BookOpen size={32} className="text-gray-400" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{book.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {book.author}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{book.genre}</span>
                      <div className="flex items-center">
                        <ThumbsUp size={14} className="mr-1" />
                        <span className="text-sm">{book.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BookRecommendation;
