import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import FeaturedBlogCard from "@/components/FeaturedBlogCard";
import { Search, X } from "lucide-react";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blogPosts";


const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const isFiltering = activeCategory !== "all" || query.trim().length > 0;

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      const matchesQuery =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach(post => {
      if (post.category) counts[post.category] = (counts[post.category] ?? 0) + 1;
    });
    return counts;
  }, []);

  // Featured layout only on the unfiltered view
  const featuredPost = !isFiltering ? filteredPosts[0] : undefined;
  const secondaryPosts = !isFiltering ? filteredPosts.slice(1, 3) : [];
  const gridPosts = !isFiltering ? filteredPosts.slice(3) : filteredPosts;
  const visiblePosts = gridPosts.slice(0, visibleCount);
  const hasMore = gridPosts.length > visibleCount;

  useEffect(() => {
    setVisibleCount(12);
  }, [activeCategory, query]);

  // Schema.org Blog + CollectionPage
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Блог логопеда Светланы Коноваловой",
    "description": "Статьи о развитии речи, подготовке к школе и миофункциональной коррекции от логопеда с 25-летним опытом.",
    "url": "https://govorim-pravilno.ru/blog",
    "author": {
      "@type": "Person",
      "name": "Светлана Коновалова",
      "jobTitle": "Логопед-дефектолог",
      "url": "https://govorim-pravilno.ru/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Говорим правильно",
      "url": "https://govorim-pravilno.ru"
    },
    "mainEntity": {
      "@type": "Blog",
      "name": "Блог Светланы Коноваловой",
      "blogPost": blogPosts.slice(0, 10).map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "url": `https://govorim-pravilno.ru/blog/${post.slug}`,
        "datePublished": post.sortDate,
        "author": {
          "@type": "Person",
          "name": "Светлана Коновалова"
        }
      }))
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Блог Светланы Коноваловой — Статьи логопеда о развитии речи</title>
        <meta name="description" content="Блог логопеда Светланы Коноваловой — статьи о развитии речи, подготовке к школе и миофункциональной коррекции. Практические советы от специалиста с 25+ летним опытом." />
        <link rel="canonical" href="https://govorim-pravilno.ru/blog" />
        <meta property="og:title" content="Блог Светланы Коноваловой — Статьи логопеда о развитии речи" />
        <meta property="og:description" content="Статьи о развитии речи, подготовке к школе и миофункциональной коррекции от логопеда Светланы Коноваловой." />
        <meta property="og:url" content="https://govorim-pravilno.ru/blog" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="блог логопеда, Светлана Коновалова, развитие речи, статьи логопеда, логопедия блог" />
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-12 md:py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
              Блог логопеда Светланы Коноваловой
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Полезные статьи о развитии речи, логопедии и подготовке к школе
            </p>
          </div>
        </section>

        {/* Search + Category Filter */}
        <section className="py-4 px-4 border-b bg-background/85 backdrop-blur-md sticky top-0 z-20">
          <div className="container mx-auto max-w-6xl space-y-3">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по статьям..."
                aria-label="Поиск по статьям"
                className="w-full h-11 rounded-full border border-input bg-card pl-10 pr-10 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Очистить поиск"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-muted hover:bg-muted/70 text-muted-foreground hover:text-foreground"
                }`}
              >
                Все статьи
                <span className="ml-1.5 opacity-70">{blogPosts.length}</span>
              </button>
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-muted hover:bg-muted/70 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className="ml-1.5 opacity-70">{categoryCounts[category] ?? 0}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        {featuredPost && (
          <section className="pt-10 md:pt-14 px-4">
            <div className="container mx-auto max-w-6xl space-y-8">
              <FeaturedBlogCard {...featuredPost} />
              {secondaryPosts.length > 0 && (
                <div className="grid md:grid-cols-2 gap-8">
                  {secondaryPosts.map((post, i) => (
                    <BlogCard key={post.slug} {...post} index={i} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-10 md:py-14 px-4">
          <div className="container mx-auto max-w-6xl">
            {isFiltering && (
              <p className="text-muted-foreground text-center mb-8">
                Найдено статей: {filteredPosts.length}
              </p>
            )}

            {!isFiltering && visiblePosts.length > 0 && (
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Все статьи</h2>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((post, i) => {
                const wide = !isFiltering && i % 6 === 3;
                return (
                  <div key={post.slug} className={wide ? "lg:col-span-2" : ""}>
                    <BlogCard {...post} index={i} wide={wide} />
                  </div>
                );
              })}
            </div>

            {hasMore && (
              <div className="text-center mt-10">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-[52px] px-8 rounded-full"
                  onClick={() => setVisibleCount((c) => c + 12)}
                >
                  Показать ещё
                </Button>
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Ничего не найдено. Попробуйте другой запрос или категорию.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Полный архив — все статьи всегда доступны ссылкой */}
        <section className="py-10 md:py-14 px-4 border-t">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Архив статей</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Запишитесь на бесплатную консультацию и узнайте, как я могу помочь вам или вашему ребёнку
            </p>
            <Button asChild size="lg" className="min-h-[56px] px-8">
              <Link to="/contacts">Записаться на консультацию</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
