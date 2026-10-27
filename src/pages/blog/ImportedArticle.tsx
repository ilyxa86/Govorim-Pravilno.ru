import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { importedBlogPosts, importedArticleImages } from "@/data/importedArticles";

const ImportedArticle = () => {
  const { slug } = useParams();
  const article = importedBlogPosts.find((post) => post.slug === slug);

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">Статья не найдена</div>;
  }

  const image = importedArticleImages[article.image as keyof typeof importedArticleImages];
  const description = article.excerpt;
  const publishedDate = new Date(article.sortDate).toISOString().slice(0, 10);
  const displayDate = new Date(`${article.sortDate}T12:00:00`).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description,
    datePublished: publishedDate,
    url: `https://govorim-pravilno.ru/blog/${article.slug}`,
    image: `https://govorim-pravilno.ru${image}`,
    author: { "@type": "Person", name: "Светлана Коновалова" },
    publisher: { "@type": "Organization", name: "Говорим правильно" }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{article.title} | Светлана Коновалова</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://govorim-pravilno.ru/blog/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://govorim-pravilno.ru/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Header />
      <Breadcrumbs />
      <main className="flex-grow">
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Назад к блогу</Link>
            </Button>
            <div className="flex items-center text-muted-foreground mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <time dateTime={publishedDate}>{displayDate}</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
            <img src={image} alt={article.title} className="w-full rounded-xl shadow-lg mb-8 aspect-video object-cover" />
            <div className="prose prose-lg max-w-none">
              {article.paragraphs.map((paragraph, index) => (
                index === 0 ? null : <p key={`${article.slug}-${index}`}>{paragraph}</p>
              ))}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
                <h2 className="text-xl font-bold mb-3">Что делать дальше?</h2>
                <p className="mb-4">Индивидуальный план коррекции можно составить на консультации со специалистом.</p>
                <Button asChild size="lg"><Link to="/contacts">Записаться на консультацию</Link></Button>
              </div>
            </div>
            <RelatedArticlesCarousel currentSlug={article.slug} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ImportedArticle;
