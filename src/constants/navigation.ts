export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "layout-dashboard" },
  { name: "Upload", href: "/upload", icon: "upload" },
  { name: "Transactions", href: "/transactions", icon: "list" },
  { name: "FinPilot Insights", href: "/insights", icon: "brain" },
  { name: "FinPilot Future", href: "/forecast", icon: "trending-up" },
  { name: "Settings", href: "/settings", icon: "settings" },
] as const;

export type NavigationItem = typeof navigation[number];