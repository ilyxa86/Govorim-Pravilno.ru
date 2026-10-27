import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogCategory, categoryColors } from "@/data/blogPosts";
import { useInView } from "@/hooks/use-in-view";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category?: BlogCategory;
  /** Wide cards span two columns on large screens */
  wide?: boolean;
  /** Stagger index for the fade-in animation */
  index?: number;
}

const BlogCard = ({ title, excerpt, image, date, slug, category, wide = false, index = 0 }: BlogCardProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const delay = `${Math.min(index, 5) * 70}ms`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`h-full transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Link to={`/blog/${slug}`} className="block h-full min-h-[48px]">
        <Card className="group h-full overflow-hidden border-border/60 transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1.5">
          <div className={`overflow-hidden relative ${wide ? "aspect-[16/7]" : "aspect-video"}`}>
            <img
              src={image}
              alt={title}
              loading="lazy"
              width="800"
              height="450"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground/60 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            {category && (
              <span
                className={`absolute bottom-3 left-3 px-3 py-1 text-xs font-medium text-primary-foreground rounded-full backdrop-blur-sm shadow-sm ${categoryColors[category]}`}
              >
                {category}
              </span>
            )}
          </div>
          <CardHeader className="p-4 md:p-6 pb-2 md:pb-3">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-2">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{date}</span>
            </div>
            <h3 className={`font-semibold leading-snug group-hover:text-primary transition-colors ${wide ? "text-lg md:text-2xl" : "text-base md:text-xl"}`}>
              {title}
            </h3>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0 flex flex-col gap-3">
            <p className={`text-muted-foreground text-sm md:text-base ${wide ? "line-clamp-2" : "line-clamp-3"}`}>
              {excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Читать
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default BlogCard;
