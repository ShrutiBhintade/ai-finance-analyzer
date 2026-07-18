import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  color?: string;
  icon?: LucideIcon;
  iconColor?: string;
};

export default function StatCard({
  title,
  value,
  color = "text-foreground",
  icon: Icon,
  iconColor = "text-blue-500",
}: StatCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-card
        p-6
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-blue-500/40
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {title}
          </p>

          <h2 className={`mt-4 text-4xl font-bold ${color}`}>
            {value}
          </h2>
        </div>

        {Icon && (
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-zinc-800
              transition-all
              duration-300
              group-hover:scale-110
            "
          >
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </div>
        )}
      </div>
    </div>
  );
}