import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE',
    category: 'Exercise',
    date: 'Jun 26, 2024',
    author: 'Benjamin',
    image: '/images/hero.png',
  },
  {
    id: 2,
    title: 'WEIGHT LOSS: A SUSTAINABLE APPROACH FOR A HEALTHIER YOU',
    category: 'Weight Loss',
    date: 'Jun 20, 2024',
    author: 'Jessica',
    image: '/images/hero.png',
  },
  {
    id: 3,
    title: 'FUEL YOUR FITNESS: A GUIDE TO NUTRITION FOR PEAK PERFORMANCE',
    category: 'Nutrition',
    date: 'Jun 23, 2024',
    author: 'David',
    image: '/images/hero.png',
  },
];

function LatestBlogs() {
  return (
    <div className="w-full bg-background p-8">
      <h2 className="text-4xl font-bold text-red-600 text-center font-orbitron mb-12">
        OUR LATEST BLOGS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-orbitron">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-video">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                {post.category}
              </span>
            </div>
            <CardHeader className="space-y-4">
              <h3 className="text-xl font-bold leading-tight hover:text-primary cursor-pointer transition-colors">
                {post.title}
              </h3>
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <img src="/images/hero.png" alt="blog image" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <img src="/images/hero.png" alt="blog image" />
                    {post.author}
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
