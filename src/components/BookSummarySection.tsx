
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, Search, Star, ThumbsUp } from 'lucide-react';

const summaries = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    summary: "An easy and proven way to build good habits and break bad ones. The book provides practical strategies that teach how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    rating: 4.9,
    votes: 3857,
    categories: ["Self-help", "Psychology", "Productivity"]
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    summary: "A lone astronaut must save Earth from disaster in this propulsive science-fiction thriller. Ryland Grace wakes up with no memory, alone on a spacecraft far from home, with an impossible mission to complete.",
    rating: 4.7,
    votes: 2198,
    categories: ["Science Fiction", "Adventure", "Thriller"]
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    summary: "Timeless lessons on wealth, greed, and happiness. The book explores the strange ways people think about money and teaches you how to make better sense of one of life's most important topics.",
    rating: 4.8,
    votes: 1876,
    categories: ["Finance", "Psychology", "Economics"]
  },
  {
    id: 4,
    title: "The Midnight Library",
    author: "Matt Haig",
    summary: "Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right by trying each possible version of her life that represents a different choice she could have made.",
    rating: 4.5,
    votes: 2934,
    categories: ["Fiction", "Fantasy", "Philosophy"]
  }
];

const BookSummarySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredSummaries = summaries.filter(summary => 
    summary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    summary.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <section id="summaries" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Book Summaries</h2>
        <p className="section-subtitle text-center">
          Quick insights into bestsellers and literary classics
        </p>
        
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <Input 
              type="search" 
              placeholder="Search books or authors..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSummaries.map(book => (
            <Card key={book.id} className="bg-white dark:bg-gray-800 hover-scale">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="story-link">{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400" />
                    <span className="font-semibold">{book.rating}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">({book.votes})</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-4">{book.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {book.categories.map((category, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ThumbsUp size={14} />
                  Helpful
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <BookOpen size={14} />
                  Read Full Summary
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg">View All Summaries</Button>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Premium members get access to 500+ in-depth book summaries
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSummarySection;
