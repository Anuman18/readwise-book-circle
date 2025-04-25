
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, MessageCircle, Crown, BookText } from 'lucide-react';

const dummyStories = [
  {
    id: 1,
    title: "The Last Bookshop",
    excerpt: "In a world where physical books had become obsolete, Martha kept the last bookshop alive against all odds. The smell of paper and ink was a rebellion...",
    author: "Emily Chen",
    avatar: "",
    initials: "EC",
    genre: "Dystopian",
    likes: 248,
    comments: 42,
    megavotes: 13,
    timeToRead: "5 min"
  },
  {
    id: 2,
    title: "Midnight Pages",
    excerpt: "The library only opened at midnight, and only for those who knew the secret password. Jacob had stumbled upon it by accident, but now he couldn't stop returning...",
    author: "Michael Torres",
    avatar: "",
    initials: "MT",
    genre: "Fantasy",
    likes: 189,
    comments: 27,
    megavotes: 8,
    timeToRead: "7 min"
  },
  {
    id: 3,
    title: "The Borrowed Words",
    excerpt: "She collected words like others collected stamps. Beautiful, forgotten words that had fallen out of use. But when the words started to disappear from her journals...",
    author: "Sophia Washington",
    avatar: "",
    initials: "SW",
    genre: "Mystery",
    likes: 312,
    comments: 56,
    megavotes: 21,
    timeToRead: "4 min"
  }
];

const StorySection = () => {
  const [activeStories, setActiveStories] = useState("trending");
  
  return (
    <section id="stories" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Community Stories</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Discover original stories from our community of writers or share your own
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button 
              variant={activeStories === "trending" ? "default" : "outline"}
              onClick={() => setActiveStories("trending")}
            >
              Trending
            </Button>
            <Button 
              variant={activeStories === "new" ? "default" : "outline"}
              onClick={() => setActiveStories("new")}
            >
              Latest
            </Button>
            <Button 
              variant={activeStories === "megavotes" ? "default" : "outline"}
              onClick={() => setActiveStories("megavotes")}
            >
              Megavotes
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dummyStories.map(story => (
            <Card key={story.id} className="hover-scale bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-gray-100 dark:bg-gray-700">
                    {story.genre}
                  </Badge>
                  <span className="text-sm text-gray-500">{story.timeToRead} read</span>
                </div>
                <CardTitle className="text-xl story-link">{story.title}</CardTitle>
                <div className="flex items-center mt-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={story.avatar} />
                    <AvatarFallback>{story.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{story.author}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {story.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    <ThumbsUp size={16} />
                    <span>{story.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    <MessageCircle size={16} />
                    <span>{story.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    <Crown size={16} />
                    <span>{story.megavotes}</span>
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <BookText size={16} />
                  <span>Read</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
            Want to share your own story with our community of book lovers and writers?
          </p>
          <Button size="lg" className="flex items-center space-x-2">
            <BookText size={18} />
            <span>Write Your Story</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
