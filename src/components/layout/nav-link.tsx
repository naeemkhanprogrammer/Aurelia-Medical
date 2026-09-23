"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/navigation";

export function isActivePath(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  return (
    pathname === item.href || (Boolean(item.matchNested) && pathname.startsWith(`${item.href}/`))
  );
}

export interface NavLinkProps {
  item: NavItem;
  className?: string;
  activeClassName?: string;
  onNavigate?: () => void;
}

/** Link that knows whether it matches the current route (sets aria-current). */
export function NavLink({ item, className, activeClassName, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const active = isActivePath(pathname, item);

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      data-active={active || undefined}
      className={cn(className, active && activeClassName)}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
