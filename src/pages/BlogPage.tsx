import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, BookOpen, Shield, TrendingUp, Megaphone, Code, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const BlogPage = () => {
  usePageSEO({
    title: "Blog | Digital Marketing & Web Development Insights Ghana - Gotechpluz",
    description: "Expert insights on web development, digital marketing, SEO, and branding for businesses in Ghana.",
    canonical: `${BASE_URL}/blog`,
    keywords: "digital marketing blog Ghana, web development tips Ghana, SEO guide Ghana, business technology blog Accra",
  });

  const featuredArticle = {
    slug: "gotechpluz-secure-platform-ghana-immigration-service",
    title: "How Gotechpluz Built a Secure Platform for Ghana Immigration Service",
    excerpt: "When the Ghana Immigration Service needed a modern, secure digital platform to serve 30 million citizens, they chose Gotechpluz. Here's the story of how we delivered a government-grade solution that increased online applications by 400%.",
    category: "Case Study", date: "February 2026", readTime: "8 min read", icon: Shield,
    tags: ["Government", "Web Development", "Security"],
  };

  const articles = [
    { slug: "digital-marketing-strategies-ghanaian-smes-2026", title: "Digital Marketing Strategies for Ghanaian SMEs in 2026", excerpt: "The digital landscape in Ghana is evolving rapidly. Discover the most effective strategies for small businesses in Accra.", category: "Digital Marketing", date: "February 2026", readTime: "6 min read", icon: Megaphone, tags: ["SMEs", "Digital Marketing", "Social Media"] },
    { slug: "why-government-institutions-choose-gotechpluz", title: "Why Government Institutions Choose Gotechpluz for Web Solutions", excerpt: "From NHIS health platforms to immigration portals, government institutions across Ghana trust Gotechpluz.", category: "Case Study", date: "January 2026", readTime: "5 min read", icon: Shield, tags: ["Government", "Trust", "Security"] },
    { slug: "seo-checklist-businesses-ghana", title: "SEO Checklist for Businesses in Ghana: A Complete Guide", excerpt: "Want your business to appear on Google when customers in Accra search for your services? Follow this comprehensive SEO checklist.", category: "SEO", date: "January 2026", readTime: "10 min read", icon: Search, tags: ["SEO", "Local SEO", "Google"] },
    { slug: "website-design-cost-ghana-2026", title: "How Much Does Website Design Cost in Ghana in 2026?", excerpt: "From basic business websites to complex e-commerce platforms, understand the real costs of professional web development.", category: "Web Development", date: "January 2026", readTime: "7 min read", icon: Code, tags: ["Pricing", "Web Design", "Business"] },
    { slug: "promote-business-online-ghana", title: "How to Promote Your Business Online in Ghana: A Step-by-Step Guide", excerpt: "From setting up your Google Business Profile to running targeted social media campaigns.", category: "Digital Marketing", date: "December 2025", readTime: "8 min read", icon: TrendingUp, tags: ["Online Marketing", "Business Growth", "Social Media"] },
    { slug: "wordpress-vs-custom-website-ghana", title: "WordPress vs Custom Website Development in Ghana: Which Is Right for You?", excerpt: "We compare costs, performance, security, and scalability to help you make the right decision.", category: "Web Development", date: "December 2025", readTime: "6 min read", icon: Code, tags: ["WordPress", "Custom Development", "Comparison"] },
  ];

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="blur-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Insights & Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Gotechpluz <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights on <strong>web development</strong>, <strong>digital marketing</strong>, <strong>SEO</strong>, and <strong>branding</strong> for businesses in Ghana.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-in-left">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Featured Article</Badge>
              </div>
              <Card className="p-8 md:p-10 bg-gradient-hero border-primary/10 hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <featuredArticle.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <Badge className="mb-2">{featuredArticle.category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">{featuredArticle.title}</h2>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featuredArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredArticle.readTime}</span>
                  <span className="flex items-center gap-1"><User className="h-4 w-4" /> Gotechpluz Team</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map(tag => (<Badge key={tag} variant="outline">{tag}</Badge>))}
                </div>
                <Link to={`/blog/${featuredArticle.slug}`}>
                  <Button className="bg-gradient-primary hover:opacity-90">Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest <span className="bg-gradient-accent bg-clip-text text-transparent">Articles</span></h2>
                <p className="text-lg text-muted-foreground">Practical tips, strategies, and insights for Ghanaian businesses</p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <AnimateOnScroll key={article.slug} animation="stagger-in" delay={index * 100}>
                    <Link to={`/blog/${article.slug}`} className="h-full">
                      <Card className="p-6 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{article.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {article.tags.map(tag => (<Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>))}
                        </div>
                      </Card>
                    </Link>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-hero border-primary/10 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Implement These Strategies?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Don't just read about digital success—let Gotechpluz make it happen for your business.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/services"><Button size="lg" className="bg-gradient-primary hover:opacity-90">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                  <Link to="/portfolio"><Button size="lg" variant="outline">View Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                </div>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
