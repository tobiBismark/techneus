import { Card } from "@/components/ui/card";
import { Package, Users, MessageSquare, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface StatsOverviewProps {
  stats: Array<{
    title: string;
    value: string | number;
    icon: any;
  }>;
}

export const StatsOverview = ({ stats }: StatsOverviewProps) => {
  const iconMap = {
    Package,
    Users, 
    MessageSquare,
    TrendingUp,
    DollarSign,
    ShoppingCart
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-luxury-navy">{stat.value}</p>
                </div>
                <div className="h-12 w-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-luxury-gold" />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};