// Type definitions for Vis Society application

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface VisionMission {
  title: string;
  description: string;
  icon?: string;
}

export interface Statistic {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}
