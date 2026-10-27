import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { BlogCategory, categoryColors } from "@/data/blogPosts";

interface FeaturedBlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category?: BlogCategory;
}

const FeaturedBlogCard = ({ title, excerpt, image, date, slug, category }: FeaturedBlogCardProps) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group block rounded-2xl overflow-hidden border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1"
    >
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[340px] overflow-hidden">
          <img
            src={image}
            alt={title}
            width="1200"
            height="750"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          {category && (
            <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium text-primary-foreground rounded-full backdrop-blur-sm ${categoryColors[category]}`}>
              {category}
            </span>
          )}
        </div>
        <div className="p-6 md:p-10 flex flex-col justify-center gap-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="w-4 h-4" />
            Новая статья
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg line-clamp-4">{excerpt}</p>
          <span className="inline-flex items-center gap-2 font-medium text-primary">
            Читать статью
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedBlogCard;
