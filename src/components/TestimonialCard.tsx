import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  author: string;
  date: string;
  category?: string;
  text: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard = ({ author, date, category, text, avatar, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <Quote className="w-8 h-8 text-primary/30" />
          {category && (
            <div className="text-sm text-muted-foreground/70">{category}</div>
          )}
        </div>
        
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-muted text-muted'
              }`}
            />
          ))}
        </div>
        
        <p className="text-xs text-foreground mb-4 leading-normal">{text}</p>
        
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-foreground">{author}</span>
          <span className="text-muted-foreground">{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
