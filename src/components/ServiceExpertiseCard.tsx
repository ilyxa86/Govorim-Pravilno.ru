import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  link?: string;
}

const ServiceExpertiseCard = ({ icon: Icon, title, description, bgColor, link }: ServiceExpertiseCardProps) => {
  const content = (
    <div className={`group bg-card rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 ${link ? 'cursor-pointer hover:border-primary' : ''} flex flex-col items-center text-center h-full`}>
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${bgColor} flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
      </div>
      <h3 className="text-sm font-semibold mb-2 text-foreground break-words [word-break:break-word]">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3 hidden md:block">{description}</p>
      {link && (
        <span className="text-xs font-medium text-primary mt-auto">
          Подробнее →
        </span>
      )}
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};

export default ServiceExpertiseCard;
