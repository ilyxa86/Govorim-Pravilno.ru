import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  author: string;
  date: string;
  text: string;
  category?: string;
  rating?: number;
}

interface VerticalReviewsMarqueeProps {
  testimonials: Testimonial[];
}

const VerticalReviewsMarquee = ({ testimonials }: VerticalReviewsMarqueeProps) => {
  // Distribute reviews across 3 columns
  const column1 = testimonials.filter((_, i) => i % 3 === 0);
  const column2 = testimonials.filter((_, i) => i % 3 === 1);
  const column3 = testimonials.filter((_, i) => i % 3 === 2);

  // Duplicate for seamless loop
  const duplicatedColumn1 = [...column1, ...column1];
  const duplicatedColumn2 = [...column2, ...column2];
  const duplicatedColumn3 = [...column3, ...column3];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] md:h-[700px] overflow-hidden">
      {/* Column 1 - Fast */}
      <div className="relative overflow-hidden group/column">
        <div className="flex flex-col gap-6 animate-scroll-up-fast group-hover/column:[animation-play-state:paused]">
          {duplicatedColumn1.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              author={testimonial.author}
              date={testimonial.date}
              text={testimonial.text}
              category={testimonial.category}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>

      {/* Column 2 - Medium (hidden on mobile) */}
      <div className="relative overflow-hidden hidden md:block group/column">
        <div className="flex flex-col gap-6 animate-scroll-up-medium group-hover/column:[animation-play-state:paused]">
          {duplicatedColumn2.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              author={testimonial.author}
              date={testimonial.date}
              text={testimonial.text}
              category={testimonial.category}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>

      {/* Column 3 - Slow (hidden on mobile and tablet) */}
      <div className="relative overflow-hidden hidden lg:block group/column">
        <div className="flex flex-col gap-6 animate-scroll-up-slow group-hover/column:[animation-play-state:paused]">
          {duplicatedColumn3.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              author={testimonial.author}
              date={testimonial.date}
              text={testimonial.text}
              category={testimonial.category}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalReviewsMarquee;
