import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  author: string;
  date: string;
  text: string;
  category?: string;
  avatar?: string;
  rating?: number;
}

interface ReviewsMarqueeProps {
  testimonials: Testimonial[];
}

const ReviewsMarquee = ({ testimonials }: ReviewsMarqueeProps) => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const el = containerRef.current;
    if (!el) return;
    const dx = e.clientX - startX.current;
    el.scrollLeft = scrollStart.current - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    const el = containerRef.current;
    if (el) el.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="group overflow-x-auto overflow-y-hidden relative select-none cursor-grab active:cursor-grabbing scrollbar-hide"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <TestimonialCard
              author={testimonial.author}
              date={testimonial.date}
              text={testimonial.text}
              category={testimonial.category}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsMarquee;
