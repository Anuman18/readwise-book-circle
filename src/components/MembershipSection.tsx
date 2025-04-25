
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Basic access to the community',
    features: [
      'Access to public stories',
      'Basic book recommendations',
      'Limited story uploads (2/month)',
      'Standard search functionality',
      'Community participation'
    ],
    cta: 'Current Plan',
    disabled: true,
    popular: false
  },
  {
    name: 'Reader',
    price: '$4.99',
    period: 'per month',
    description: 'Enhanced reading experience',
    features: [
      'Everything in Free tier',
      'Ad-free browsing experience',
      'Advanced AI recommendations',
      'Access to exclusive book reviews',
      'Early access to contests',
      'Premium reading features'
    ],
    cta: 'Upgrade to Reader',
    disabled: false,
    popular: true
  },
  {
    name: 'Writer',
    price: '$9.99',
    period: 'per month',
    description: 'Tools for aspiring authors',
    features: [
      'Everything in Reader tier',
      'Unlimited story uploads',
      'Writing analytics dashboard',
      'Monthly writing workshops',
      'Priority contest entries',
      'Profile promotion',
      'Featured story opportunities'
    ],
    cta: 'Upgrade to Writer',
    disabled: false,
    popular: false
  }
];

const MembershipSection = () => {
  return (
    <section id="membership" className="section-padding bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Membership Plans</h2>
        <p className="section-subtitle text-center">
          Choose the plan that fits your reading and writing goals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`border ${
                tier.popular 
                  ? 'border-black dark:border-white relative' 
                  : 'border-gray-200 dark:border-gray-800'
              } bg-white dark:bg-gray-900 flex flex-col`}
            >
              {tier.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white dark:bg-white dark:text-black text-xs font-bold py-1 px-4 rounded-full">
                  Most Popular
                </span>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-gray-600 dark:text-gray-400 ml-2">{tier.period}</span>
                  )}
                </div>
                <CardDescription className="mt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check size={18} className="mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${tier.popular ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
                  variant={tier.popular ? "default" : "outline"}
                  disabled={tier.disabled}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looking for custom solutions for your publishing company, bookstore, or educational institution?
            We offer tailored packages for businesses and organizations.
          </p>
          <Button variant="outline" size="lg">Contact for Enterprise</Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
