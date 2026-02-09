import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getArticleBySlug, blogArticles } from "@/data/blog-articles";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  usePageSEO({
    title: article.metaTitle,
    description: article.metaDescription,
    canonical: `${BASE_URL}/blog/${article.slug}`,
    keywords: article.keywords,
    ogTitle: article.title,
    ogDescription: article.metaDescription,
  });

  // Get related articles (same category, excluding current)
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  // If not enough related from same category, fill with others
  if (relatedArticles.length < 2) {
    const others = blogArticles
      .filter((a) => a.slug !== article.slug && !relatedArticles.includes(a))
      .slice(0, 2 - relatedArticles.length);
    relatedArticles.push(...others);
  }

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />

      {/* Article Header */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="blur-in">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {article.category}
                </Badge>
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" /> {article.author}
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in-up">
            <article
              className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:space-y-1 prose-ol:space-y-1 prose-table:border prose-table:border-border prose-th:bg-muted/50 prose-th:p-3 prose-th:text-left prose-td:p-3 prose-td:border prose-td:border-border"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="scale-in">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Take Action?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let Gotechpluz help you implement the strategies discussed in
                this article.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    Explore Services{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">
                    View Portfolio{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll animation="fade-in-up">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group"
                    >
                      <div className="p-6 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                        <Badge variant="secondary" className="mb-3 text-xs">
                          {related.category}
                        </Badge>
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
                          <span>{related.date}</span>
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;
