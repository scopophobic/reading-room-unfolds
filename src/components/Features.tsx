
import { BookOpen, MessageSquare, BookUser, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const featureItems = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Post and Review Books",
      description: "Share your thoughts on books you've read and discover what others are saying about titles in your to-read list."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Threaded Literary Discussions",
      description: "Engage in meaningful conversations about themes, characters, and plot points with fellow readers."
    },
    {
      icon: <BookUser className="h-10 w-10 text-primary" />,
      title: "AI-Powered Book Recommendations",
      description: "Discover your next favorite read with our smart recommendation system that learns your preferences."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Reading Challenges & Achievements",
      description: "Set reading goals, track your progress, and earn achievements as you expand your literary horizons."
    }
  ];

  return (
    <section id="features" className="py-20 bg-reading-blue/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">A Better Way to Experience Books</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a casual reader or a passionate bibliophile, Reading Room makes every story a shared journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((feature, index) => (
            <Card key={index} className="feature-card border-reading-cream hover:border-primary">
              <CardContent className="p-6 flex flex-col items-start h-full">
                <div className="mb-5 p-3 bg-reading-cream bg-opacity-50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
