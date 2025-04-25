
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, BookText, Clock } from 'lucide-react';

const contests = [
  {
    title: "Summer Reading Challenge",
    description: "Write a short story inspired by your favorite summer read. Top entries will be featured on our homepage.",
    deadline: "July 15, 2025",
    participants: 234,
    maxParticipants: 500,
    prize: "Featured Spotlight + $200",
    category: "Short Story",
    status: "active"
  },
  {
    title: "Mystery & Thriller Contest",
    description: "Craft a suspenseful opening chapter that hooks readers from the first paragraph.",
    deadline: "August 3, 2025",
    participants: 186,
    maxParticipants: 300,
    prize: "Publishing Consultation + $150",
    category: "Novel Opening",
    status: "active"
  },
  {
    title: "Poetry in Motion",
    description: "Express the theme of 'transformation' in a poem of no more than 40 lines.",
    deadline: "June 20, 2025",
    participants: 312,
    maxParticipants: 350,
    prize: "Poetry Collection + $100",
    category: "Poetry",
    status: "active"
  }
];

const ContestsSection = () => {
  return (
    <section id="contests" className="section-padding bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Monthly Writing Contests</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Showcase your talent and win prizes in our themed writing competitions
            </p>
          </div>
          <Button className="mt-4 md:mt-0 flex items-center gap-2">
            <Calendar size={16} />
            View All Contests
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contests.map((contest, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-800 hover-scale">
              <div className="h-2 bg-black dark:bg-white w-full"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant={contest.status === 'active' ? 'default' : 'outline'}>
                    {contest.status === 'active' ? 'Active' : 'Upcoming'}
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100 dark:bg-gray-700">
                    {contest.category}
                  </Badge>
                </div>
                <CardTitle className="mt-2">{contest.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={14} className="mr-1" />
                  Deadline: {contest.deadline}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">{contest.description}</CardDescription>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Participants</span>
                      <span>{contest.participants} / {contest.maxParticipants}</span>
                    </div>
                    <Progress value={(contest.participants / contest.maxParticipants) * 100} className="h-2" />
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-sm font-medium">Prize: {contest.prize}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full flex items-center justify-center gap-2">
                  <BookText size={16} />
                  Submit Your Entry
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <Award size={48} className="mx-auto mb-4 text-yellow-600 dark:text-yellow-400" />
          <h3 className="text-2xl font-bold mb-4">Previous Winners</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Check out last month's winning entries and get inspired for your next submission
          </p>
          <Button variant="outline">View Hall of Fame</Button>
        </div>
      </div>
    </section>
  );
};

export default ContestsSection;
