
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy, Crown, ThumbsUp, BookOpen } from 'lucide-react';

const dummyLeaderboardAuthors = [
  { rank: 1, name: 'Emma Johnson', stories: 42, megavotes: 178, avatar: '', initials: 'EJ', award: 'Crown' },
  { rank: 2, name: 'Michael Chen', stories: 37, megavotes: 145, avatar: '', initials: 'MC', award: '' },
  { rank: 3, name: 'Sophia Williams', stories: 29, megavotes: 112, avatar: '', initials: 'SW', award: '' },
  { rank: 4, name: 'David Rodriguez', stories: 31, megavotes: 98, avatar: '', initials: 'DR', award: '' },
  { rank: 5, name: 'Olivia Taylor', stories: 26, megavotes: 87, avatar: '', initials: 'OT', award: '' }
];

const dummyLeaderboardStories = [
  { rank: 1, title: 'The Midnight Library Redux', author: 'Emma Johnson', megavotes: 87, reads: 1423, award: 'Crown' },
  { rank: 2, title: 'Whispers of the Ancient Scrolls', author: 'Michael Chen', megavotes: 76, reads: 1256, award: '' },
  { rank: 3, title: 'The Last Page', author: 'Sophia Williams', megavotes: 65, reads: 1109, award: '' },
  { rank: 4, title: 'Echo of Forgotten Words', author: 'David Rodriguez', megavotes: 59, reads: 984, award: '' },
  { rank: 5, title: 'Between the Lines', author: 'Olivia Taylor', megavotes: 52, reads: 876, award: '' }
];

const LeaderboardSection = () => {
  const [period, setPeriod] = useState('month');
  
  return (
    <section id="leaderboard" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Community Leaderboard</h2>
        <p className="section-subtitle text-center">
          Celebrating our top writers and most popular stories
        </p>
        
        <Tabs defaultValue="authors" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="authors">Top Authors</TabsTrigger>
              <TabsTrigger value="stories">Top Stories</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <Button 
                variant={period === 'week' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setPeriod('week')}
              >
                This Week
              </Button>
              <Button 
                variant={period === 'month' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setPeriod('month')}
              >
                This Month
              </Button>
              <Button 
                variant={period === 'year' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setPeriod('year')}
              >
                This Year
              </Button>
              <Button 
                variant={period === 'alltime' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setPeriod('alltime')}
              >
                All Time
              </Button>
            </div>
          </div>
          
          <TabsContent value="authors">
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                        <th className="pb-4 font-semibold">Rank</th>
                        <th className="pb-4 font-semibold">Author</th>
                        <th className="pb-4 font-semibold text-center">Stories</th>
                        <th className="pb-4 font-semibold text-center">Megavotes</th>
                        <th className="pb-4 font-semibold text-right">Award</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyLeaderboardAuthors.map((author) => (
                        <tr key={author.rank} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-4">
                            <div className="flex items-center">
                              {author.rank <= 3 ? (
                                <Trophy 
                                  className={`mr-2 ${
                                    author.rank === 1 
                                      ? 'text-yellow-400' 
                                      : author.rank === 2
                                      ? 'text-gray-400'
                                      : 'text-amber-700'
                                  }`} 
                                  size={18} 
                                />
                              ) : (
                                <span className="inline-block w-5 text-center">{author.rank}</span>
                              )}
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src={author.avatar} />
                                <AvatarFallback>{author.initials}</AvatarFallback>
                              </Avatar>
                              <span>{author.name}</span>
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <div className="flex items-center justify-center">
                              <BookOpen size={14} className="mr-1" />
                              <span>{author.stories}</span>
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <div className="flex items-center justify-center">
                              <Crown size={14} className="mr-1" />
                              <span>{author.megavotes}</span>
                            </div>
                          </td>
                          <td className="py-4 text-right">
                            {author.award === 'Crown' && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                                <Crown size={12} className="mr-1" /> Top Writer
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button variant="outline">View Full Leaderboard</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="stories">
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                        <th className="pb-4 font-semibold">Rank</th>
                        <th className="pb-4 font-semibold">Story</th>
                        <th className="pb-4 font-semibold">Author</th>
                        <th className="pb-4 font-semibold text-center">Megavotes</th>
                        <th className="pb-4 font-semibold text-center">Reads</th>
                        <th className="pb-4 font-semibold text-right">Award</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyLeaderboardStories.map((story) => (
                        <tr key={story.rank} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-4">
                            <div className="flex items-center">
                              {story.rank <= 3 ? (
                                <Trophy 
                                  className={`mr-2 ${
                                    story.rank === 1 
                                      ? 'text-yellow-400' 
                                      : story.rank === 2
                                      ? 'text-gray-400'
                                      : 'text-amber-700'
                                  }`} 
                                  size={18} 
                                />
                              ) : (
                                <span className="inline-block w-5 text-center">{story.rank}</span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 story-link">{story.title}</td>
                          <td className="py-4">{story.author}</td>
                          <td className="py-4 text-center">
                            <div className="flex items-center justify-center">
                              <Crown size={14} className="mr-1" />
                              <span>{story.megavotes}</span>
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <div className="flex items-center justify-center">
                              <ThumbsUp size={14} className="mr-1" />
                              <span>{story.reads}</span>
                            </div>
                          </td>
                          <td className="py-4 text-right">
                            {story.award === 'Crown' && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                                <Crown size={12} className="mr-1" /> Featured
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button variant="outline">View Top 100</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LeaderboardSection;
