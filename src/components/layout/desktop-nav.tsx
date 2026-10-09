import { uiStrings } from "@/data/common";
import type { NavItem } from "@/types/navigation";

import { NavLink } from "./nav-link";

export function DesktopNav({ items }: { items: readonly NavItem[] }) {
  return (
    <nav aria-label={uiStrings.primaryNavLabel} className="hidden xl:block">
      <ul className="flex items-center gap-1 2xl:gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink
              item={item}
              className="relative inline-flex h-10 items-center rounded-full px-3 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 hover:text-heading hover:after:scale-x-100"
              activeClassName="text-heading after:scale-x-100"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
