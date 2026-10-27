import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
}

const PriceCard = ({ title, price, description }: PriceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="text-2xl font-bold text-primary mt-2">{price}</div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
