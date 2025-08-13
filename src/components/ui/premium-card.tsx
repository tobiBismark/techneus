import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  style?: React.CSSProperties;
}

const PremiumCard = ({ children, className, hover = true, glow = false, style }: PremiumCardProps) => {
  return (
    <Card className={cn(
      "card-luxury",
      hover && "hover:scale-105 transition-all duration-300",
      glow && "hover:animate-glow",
      className
    )} style={style}>
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
};

export { PremiumCard };