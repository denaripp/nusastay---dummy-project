import React from "react";
import {
  Wifi,
  Wind,
  Utensils,
  Waves,
  Trees,
  Laptop,
  ShieldCheck,
  ConciergeBell,
  Clock,
  Car,
  Bike,
  Sparkles,
} from "lucide-react";

interface AmenityItemProps {
  title: string;
  description: string;
  iconName: string;
}

export function AmenityItem({ title, description, iconName }: AmenityItemProps) {
  const renderIcon = () => {
    switch (iconName) {
      case "Wifi":
        return <Wifi className="w-7 h-7 text-primary" />;
      case "Wind":
        return <Wind className="w-7 h-7 text-primary" />;
      case "Utensils":
        return <Utensils className="w-7 h-7 text-primary" />;
      case "Waves":
        return <Waves className="w-7 h-7 text-primary" />;
      case "Trees":
        return <Trees className="w-7 h-7 text-primary" />;
      case "Laptop":
        return <Laptop className="w-7 h-7 text-primary" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-primary" />;
      case "ConciergeBell":
        return <ConciergeBell className="w-7 h-7 text-primary" />;
      case "Car":
        return <Car className="w-7 h-7 text-primary" />;
      case "Bike":
        return <Bike className="w-7 h-7 text-primary" />;
      case "Clock":
        return <Clock className="w-7 h-7 text-primary" />;
      default:
        return <Sparkles className="w-7 h-7 text-primary" />;
    }
  };

  return (
    <div className="bg-surface-white/85 backdrop-blur-sm rounded-[16px] p-space-lg transition-transform duration-300 hover:-translate-y-1 shadow-soft border border-mist-border/50 flex flex-col justify-between">
      <div>
        <div className="mb-space-sm">{renderIcon()}</div>
        <h4 className="font-title-sm text-title-sm text-primary mb-1">
          {title}
        </h4>
        <p className="font-body-sm text-body-sm text-stone-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
