import {
  Accessibility,
  Activity,
  Award,
  Baby,
  BadgeCheck,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  CircleHelp,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  HandHeart,
  Handshake,
  HeartPulse,
  Info,
  Languages,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Receipt,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  ThumbsUp,
  UserPlus,
  Users,
  Video,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

import type { IconName } from "@/constants/icons";

import { FamilyIcon, LungsIcon } from "./custom-icons";

/** Maps content-level icon names to SVG components. Only listed icons are bundled. */
const registry = {
  family: FamilyIcon,
  lungs: LungsIcon,
  brain: Brain,
  "heart-pulse": HeartPulse,
  "hand-heart": HandHeart,
  stethoscope: Stethoscope,
  users: Users,
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  calendar: Calendar,
  "calendar-check": CalendarCheck,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  video: Video,
  "user-plus": UserPlus,
  clipboard: ClipboardList,
  receipt: Receipt,
  star: Star,
  "thumbs-up": ThumbsUp,
  check: Check,
  award: Award,
  languages: Languages,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  building: Building2,
  handshake: Handshake,
  sparkles: Sparkles,
  baby: Baby,
  activity: Activity,
  "book-open": BookOpen,
  info: Info,
  "help-circle": CircleHelp,
  accessibility: Accessibility,
  megaphone: Megaphone,
  lock: Lock,
  "badge-check": BadgeCheck,
} satisfies Record<IconName, LucideIcon | ComponentType<LucideProps>>;

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
  /** Provide a label only when the icon conveys meaning on its own; otherwise it's decorative. */
  label?: string;
}

export function Icon({ name, label, strokeWidth = 1.5, ...props }: IconProps) {
  const Component = registry[name];
  return (
    <Component
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
      {...props}
    />
  );
}
