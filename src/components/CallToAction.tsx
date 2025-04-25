
import { Button } from '@/components/ui/button';
import { BookOpen, BookText } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">Join Our Community Today</h2>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-300">
          Connect with thousands of readers and writers, discover your next favorite book, and share your own stories with the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 gap-2 flex-1">
            <BookOpen size={18} /> Start Reading
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black gap-2 flex-1">
            <BookText size={18} /> Share Your Story
          </Button>
        </div>
        
        <p className="mt-10 text-sm text-gray-400">
          Already a member? <a href="#" className="underline">Sign in</a>
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
