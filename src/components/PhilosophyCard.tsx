import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PhilosophyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const PhilosophyCard = ({ icon: Icon, title, description, iconBgColor, iconColor }: PhilosophyCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-muted">
      <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
        <div 
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 flex-shrink-0 ${iconBgColor}`}
        >
          <Icon className={`w-7 h-7 md:w-8 md:h-8 ${iconColor}`} strokeWidth={2} />
        </div>
        <h3 className="text-sm md:text-base font-bold text-foreground mb-2 md:mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default PhilosophyCard;
