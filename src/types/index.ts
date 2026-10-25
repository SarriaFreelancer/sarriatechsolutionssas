export type Language = "es" | "en";

export interface ServiceItem {
  id: string;
  nameKey: string;
  descKey: string;
  iconName: string;
  colorScheme: "blue" | "purple" | "magenta" | "cyan" | "green" | "gold" | "cyan-blue" | "violet-cyan" | "magenta-violet";
  startingPrice?: string;
  priceNoteKey?: string;
  badgeKey?: string;
  tags: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  titleKey: string;
  categoryKey: string;
  descKey: string;
  url?: string;
  colorScheme: "cyan-blue" | "violet-magenta" | "blue-cyan";
  featuresKeys: string[];
  statusKey?: string;
  image?: string;
  ctaTextKey: string;
  demoTextKey: string;
}

export interface ContactFormData {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  country: string;
  service: string;
  estimatedBudget?: string;
  description: string;
  preferredChannel: "whatsapp" | "email" | "call";
  privacyAccepted: boolean;
  honeypot?: string;
}
