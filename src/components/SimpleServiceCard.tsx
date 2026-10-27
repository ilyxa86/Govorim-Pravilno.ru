import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SimpleServiceCardProps {
  icon: LucideIcon;
  title: string;
  bgColor: string;
  link?: string;
}

const SimpleServiceCard = ({ icon: Icon, title, bgColor, link }: SimpleServiceCardProps) => {
  const content = (
    <>
      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${bgColor} flex items-center justify-center mb-3 md:mb-4 flex-shrink-0`}>
        <Icon className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <h3 className="text-sm md:text-base font-medium text-foreground leading-tight">{title}</h3>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-card hover:shadow-md transition-shadow min-h-[120px] md:min-h-[140px] hover:scale-105 transition-transform">
        {content}
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-card hover:shadow-md transition-shadow min-h-[120px] md:min-h-[140px]">
      {content}
    </div>
  );
};

export default SimpleServiceCard;
