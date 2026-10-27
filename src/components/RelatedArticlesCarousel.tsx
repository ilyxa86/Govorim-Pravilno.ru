import { Link } from "react-router-dom";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedArticlesCarouselProps {
  currentSlug: string;
  maxItems?: number;
}

const RelatedArticlesCarousel = ({ 
  currentSlug, 
  maxItems = 6 
}: RelatedArticlesCarouselProps) => {
  // Artikel derselben Kategorie zuerst, Auswahl deterministisch am Slug rotiert,
  // damit sich interne Links über den gesamten Bestand verteilen.
  const others = blogPosts.filter(post => post.slug !== currentSlug);
  const current = blogPosts.find(post => post.slug === currentSlug);
  const seed = Array.from(currentSlug).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  const rotate = (list: BlogPost[]) =>
    list.length === 0 ? list : list.slice(seed % list.length).concat(list.slice(0, seed % list.length));

  const sameCategory = rotate(others.filter(post => post.category === current?.category));
  const rest = rotate(others.filter(post => post.category !== current?.category));

  const relatedPosts: BlogPost[] = [...sameCategory, ...rest].slice(0, maxItems);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Читайте также</h2>
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: relatedPosts.length > 2,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {relatedPosts.map((post) => (
                <CarouselItem 
                  key={post.slug} 
                  className="pl-4 basis-full md:basis-1/2"
                >
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="group block p-6 bg-card rounded-xl border hover:shadow-lg transition-all h-full"
                  >
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticlesCarousel;
