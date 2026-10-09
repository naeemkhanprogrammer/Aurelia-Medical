import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/shared/json-ld";
import { routes } from "@/config/routes";
import { galleryPageContent as content } from "@/data/pages/gallery";
import { homeContent } from "@/data/pages/home";
import { getGalleryCategories, getGalleryImages } from "@/features/gallery/api";
import { GalleryBrowser } from "@/features/gallery/components/gallery-browser";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { breadcrumbJsonLd, imageGalleryJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ ...content.seo, path: routes.gallery });

export default async function GalleryPage() {
  const [images, categories] = await Promise.all([getGalleryImages(), getGalleryCategories()]);
  const breadcrumbs = buildBreadcrumbs({ name: content.seo.title, path: routes.gallery });

  return (
    <>
      <JsonLd
        data={[imageGalleryJsonLd(content.seo.title, images), breadcrumbJsonLd(breadcrumbs)]}
      />
      <PageHero intro={content.hero} breadcrumbs={breadcrumbs} />
      <Section aria-label={content.seo.title}>
        <Container>
          <GalleryBrowser images={images} categories={categories} />
        </Container>
      </Section>
      <CtaBand content={homeContent.ctaBand} />
    </>
  );
}
