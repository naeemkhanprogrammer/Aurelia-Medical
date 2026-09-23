import { Phone } from "lucide-react";
import type { ComponentProps } from "react";

import { contactConfig } from "@/config/contact";

export interface PhoneLinkProps extends Omit<ComponentProps<"a">, "href"> {
  /** Text shown before the number, e.g. "Or call". */
  prefix?: string;
  showIcon?: boolean;
}

/** Click-to-call link using the clinic's configured number. */
export function PhoneLink({ prefix, showIcon = true, children, ...props }: PhoneLinkProps) {
  const { phone } = contactConfig;
  return (
    <a href={`tel:${phone.e164}`} {...props}>
      {showIcon && <Phone aria-hidden />}
      {children ?? (prefix ? `${prefix} ${phone.display}` : phone.display)}
    </a>
  );
}
