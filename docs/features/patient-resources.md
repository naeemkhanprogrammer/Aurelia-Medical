# Feature — Patient Resources

**Route:** `/patient-resources`
**Purpose:** a hub for forms, guides and trusted external health resources.

## Sections & components

| Section           | Component                                        |
| ----------------- | ------------------------------------------------ |
| Quick links (5)   | `FeatureCard`                                    |
| Forms & documents | `DocumentList` (`features/resources/components`) |
| Trusted resources | `ExternalResourceList` (external links, new tab) |

## Data

`data/resources.ts` (`resourceDocuments`, `externalResources`) via `features/resources/api.ts`; copy in `data/pages/patient-resources.ts`.

### Adding a downloadable form

1. Put the file in `public/documents/<name>.pdf`.
2. Add `file: { href: "/documents/<name>.pdf", format: "PDF", sizeLabel: "240 KB" }` to the item.
   Items without `file` show a "Coming soon" badge — no dead links.

## Privacy

Forms are downloads only; patients bring completed forms to the clinic. Nothing is uploaded to this site.

## TODO

Actual PDFs; verify external resource URLs with the clinic.
