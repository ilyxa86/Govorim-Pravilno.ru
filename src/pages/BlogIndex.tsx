import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const mainPages = [
  ["Главная", "/"],
  ["Обо мне", "/about"],
  ["Занятия и услуги", "/services"],
  ["Отзывы", "/reviews"],
  ["Материалы", "/materials"],
  ["Контакты", "/contacts"],
] as const;

const BlogIndex = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Карта сайта — все статьи и страницы | Светлана Коновалова</title>
      <meta
        name="description"
        content="Полный список страниц и статей сайта логопеда Светланы Геннадьевны Коноваловой."
      />
      <link rel="canonical" href="https://govorim-pravilno.ru/blog-index" />
    </Helmet>
    <Header />
    <main className="px-4 py-10 md:py-16">
      <div className="container mx-auto max-w-5xl">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Карта сайта</h1>
        <p className="mb-10 max-w-3xl text-muted-foreground">
          Все основные разделы и статьи сайта логопеда Светланы Геннадьевны Коноваловой.
        </p>

        <section className="mb-12" aria-labelledby="main-pages-heading">
          <h2 id="main-pages-heading" className="mb-5 text-2xl font-bold">Основные разделы</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mainPages.map(([label, path]) => (
              <li key={path}>
                <Link className="font-medium text-primary underline-offset-4 hover:underline" to={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="blog-pages-heading">
          <h2 id="blog-pages-heading" className="mb-5 text-2xl font-bold">
            Статьи блога ({blogPosts.length})
          </h2>
          <ul className="divide-y divide-border">
            {blogPosts.map((post) => (
              <li key={post.slug} className="py-4">
                <Link
                  className="text-base font-semibold leading-snug text-primary underline-offset-4 hover:underline md:text-lg"
                  to={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">{post.category} · {post.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default BlogIndex;
