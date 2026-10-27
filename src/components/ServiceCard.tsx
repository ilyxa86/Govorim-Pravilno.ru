import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const cardContent = (
    <Card className={`transition-all duration-300 hover:shadow-lg h-full ${link ? "cursor-pointer hover:border-primary" : ""}`}>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ServiceCard;
