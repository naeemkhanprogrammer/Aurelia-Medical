import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { ExternalLink } from "@/components/shared/external-link";
import { Logo } from "@/components/shared/logo";
import { SocialIcon } from "@/components/shared/social-icons";
import { buttonVariants } from "@/components/ui/button";
import { contactConfig } from "@/config/contact";
import { externalLinks } from "@/config/external-links";
import { footerNav, legalNav, socialLinks } from "@/config/navigation";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { uiStrings } from "@/data/common";
import { cn } from "@/lib/cn";
import { formatAddressLines, formatHours } from "@/lib/format";

import { Container } from "./container";

const headingClass = "font-sans text-sm font-semibold tracking-wide text-inverse-foreground";
const linkClass = "text-sm text-inverse-muted transition-colors hover:text-accent-soft";

export function Footer() {
  const { phone, email, address, hours, hoursNote } = contactConfig;
  const [addressLine1, addressLine2] = formatAddressLines(address);
  const t = uiStrings.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inverse text-inverse-muted">
      {/* Stay connected band */}
      <div className="border-b border-inverse-border">
        <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <h2 className={cn(headingClass, "font-heading text-h3 font-semibold tracking-normal")}>
              {t.stayConnectedTitle}
            </h2>
            <p className="mt-2 text-sm">{t.stayConnectedText}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ExternalLink
              href={externalLinks.newsletter.url}
              isPlaceholder={externalLinks.newsletter.isPlaceholder}
              className={buttonVariants({ variant: "accent" })}
            >
              <Mail aria-hidden />
              {t.subscribeLabel}
            </ExternalLink>
            <p className="text-xs">{t.privacyNote}</p>
          </div>
        </Container>
      </div>

      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-4">
          <Link
            href={routes.home}
            aria-label={uiStrings.homeLinkLabel}
            className="inline-block rounded-md"
          >
            <Logo tone="inverse" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{siteConfig.description}</p>
          <ul className="mt-6 flex gap-3" aria-label={t.socialTitle}>
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <ExternalLink
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-inverse-border text-inverse-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <SocialIcon platform={social.platform} className="size-4" />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h2 className={headingClass}>{t.contactTitle}</h2>
          <address className="mt-5 flex flex-col gap-4 text-sm not-italic">
            <p className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {addressLine1}
                <br />
                {addressLine2}
              </span>
            </p>
            <a href={`tel:${phone.e164}`} className={cn(linkClass, "flex gap-3")}>
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
              {phone.display}
            </a>
            <a href={`mailto:${email}`} className={cn(linkClass, "flex gap-3")}>
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
              {email}
            </a>
          </address>
        </div>

        {/* Hours */}
        <div className="lg:col-span-3">
          <h2 className={headingClass}>{t.hoursTitle}</h2>
          <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
            {hours.map((entry) => (
              <div key={entry.label} className="contents">
                <dt className="text-inverse-foreground">{entry.label}</dt>
                <dd>{formatHours(entry, uiStrings.closed)}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 flex items-center gap-2 text-xs">
            <Clock aria-hidden className="size-3.5 text-accent" />
            {hoursNote}
          </p>
        </div>

        {/* Link groups */}
        <nav
          aria-label={uiStrings.footerNavLabel}
          className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2 lg:grid-cols-1"
        >
          {footerNav.slice(0, 1).map((group) => (
            <div key={group.title}>
              <h2 className={headingClass}>{group.title}</h2>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      {/* Patients links row */}
      {footerNav.slice(1).map((group) => (
        <Container key={group.title} as="nav" aria-label={group.title}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-inverse-border py-6">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      ))}

      <div className="border-t border-inverse-border">
        <Container className="flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{t.copyright(year, siteConfig.name)}</p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
