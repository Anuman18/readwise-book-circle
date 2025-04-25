
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, ThumbsUp, ArrowUp, Zap } from 'lucide-react';

const MegavotesSection = () => {
  return (
    <section id="megavotes" className="section-padding bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Megavotes</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Our unique voting system that gives stories and authors extra visibility
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg flex items-center">
            <Crown size={20} className="mr-2 text-yellow-500" />
            <span className="font-semibold">Your Megavotes:</span>
            <span className="ml-2 font-bold">3</span>
            <Badge className="ml-3 bg-green-500 hover:bg-green-600">+1 Daily</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          <div className="md:col-span-3 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center">
            <div className="mx-auto w-16 h-16 bg-white dark:bg-black rounded-full flex items-center justify-center mb-4">
              <Crown size={32} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">How Megavotes Work</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Megavotes are special upvotes with more impact. Each user receives one Megavote daily,
              with premium members getting extra. Use them wisely to highlight exceptional content!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl">
                <div className="mx-auto w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
                  <Zap size={20} className="text-yellow-500" />
                </div>
                <h4 className="font-semibold mb-2">10x Impact</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Each Megavote has the power of 10 regular upvotes for visibility
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl">
                <div className="mx-auto w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
                  <ArrowUp size={20} className="text-green-500" />
                </div>
                <h4 className="font-semibold mb-2">Boosted Ranking</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content with Megavotes ranks higher in search results
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl">
                <div className="mx-auto w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
                  <ThumbsUp size={20} className="text-blue-500" />
                </div>
                <h4 className="font-semibold mb-2">Featured Content</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Stories with the most Megavotes get featured on our homepage
                </p>
              </div>
            </div>
          </div>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ThumbsUp size={20} className="mr-2" /> Regular Upvotes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex">
                  <ThumbsUp size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span>Show appreciation for content you enjoy</span>
                </li>
                <li className="flex">
                  <ThumbsUp size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span>Unlimited number of regular upvotes</span>
                </li>
                <li className="flex">
                  <ThumbsUp size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span>Contributes to overall popularity ranking</span>
                </li>
                <li className="flex">
                  <ThumbsUp size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span>Available to all community members</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-yellow-500 bg-white dark:bg-gray-900 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              Premium Feature
            </div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown size={20} className="mr-2 text-yellow-500" /> Megavotes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex">
                  <Crown size={16} className="mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                  <span>10x the impact of regular upvotes</span>
                </li>
                <li className="flex">
                  <Crown size={16} className="mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                  <span>Limited availability (1 per day, more for premium)</span>
                </li>
                <li className="flex">
                  <Crown size={16} className="mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                  <span>Boosts content to featured sections</span>
                </li>
                <li className="flex">
                  <Crown size={16} className="mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                  <span>Earns special badges for content creators</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Premium Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex">
                  <Badge className="mr-2 bg-gray-200 text-gray-800">+3</Badge>
                  <span>Reader tier: 3 extra Megavotes per week</span>
                </li>
                <li className="flex">
                  <Badge className="mr-2 bg-gray-200 text-gray-800">+7</Badge>
                  <span>Writer tier: 7 extra Megavotes per week</span>
                </li>
                <li className="flex">
                  <Badge className="mr-2 bg-yellow-200 text-yellow-800">2x</Badge>
                  <span>Premium Megavotes have doubled visibility impact</span>
                </li>
                <li className="flex">
                  <Badge className="mr-2 bg-green-200 text-green-800">
                    <ArrowUp size={12} className="mr-1" /> 
                    Boost
                  </Badge>
                  <span>Option to super-boost one story per month</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="px-8">Get More Megavotes</Button>
        </div>
      </div>
    </section>
  );
};

export default MegavotesSection;
