import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="p-3 rounded-lg gradient-accent glow group-hover:glow-lg transition-all duration-300">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}
