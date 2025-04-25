
import { 
  BookText, 
  Search, 
  Award, 
  Crown, 
  ThumbsUp,
  Users,
  Star,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'AI Book Recommendations',
    description: 'Get personalized book recommendations based on your reading history and preferences.',
    icon: BookOpen
  },
  {
    title: 'Advanced Book Search',
    description: 'Find books easily by title, author, genre, or keywords with our powerful search engine.',
    icon: Search
  },
  {
    title: 'Monthly Writing Contests',
    description: 'Participate in themed writing contests and win prizes while showcasing your talent.',
    icon: Award
  },
  {
    title: 'Megavote System',
    description: 'Give and receive special visibility boosts through our unique megavote feature.',
    icon: Crown
  },
  {
    title: 'Community Engagement',
    description: 'Connect with fellow readers and writers through comments, upvotes, and discussions.',
    icon: ThumbsUp
  },
  {
    title: 'Premium Membership',
    description: 'Access exclusive content, features, and benefits with our tiered membership plans.',
    icon: Users
  },
  {
    title: 'Author Leaderboards',
    description: 'Track your popularity and ranking among other writers in the community.',
    icon: Star
  },
  {
    title: 'Story Publishing',
    description: 'Share your own stories, poems, and book reviews with our supportive community.',
    icon: BookText
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Platform Features</h2>
        <p className="section-subtitle text-center">
          Explore the tools and features designed for book lovers and storytellers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover-scale">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-gray-800 dark:text-gray-200" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
