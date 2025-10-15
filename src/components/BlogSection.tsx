import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of EV Charging: What to Expect in 2024",
    excerpt:
      "Explore the latest trends and innovations shaping the electric vehicle charging landscape.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/charger-closeup-bokeh.png",
    slug: "future-of-ev-charging-2024",
  },
  {
    id: 2,
    title: "How to Choose the Right EV Charger for Your Business",
    excerpt:
      "A comprehensive guide to selecting the perfect charging solution for your commercial property.",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "/charging-station.png",
    slug: "choose-right-ev-charger-business",
  },
  {
    id: 3,
    title: "EV Charging Station ROI: Maximizing Your Investment",
    excerpt:
      "Learn how property owners are generating substantial returns with EV charging infrastructure.",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/phone-rfid.png",
    slug: "ev-charging-station-roi",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What's New</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
              onClick={() => window.location.href = `/blog/${post.slug}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-lg text-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-lg text-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = "/blog"}
            className="group rounded-xl"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="text-center bg-primary rounded-2xl py-16 px-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Stay Powered Up</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest updates on EV charging technology, new locations,
              and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold whitespace-nowrap h-auto rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
