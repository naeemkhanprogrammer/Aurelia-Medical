import { Download, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { ResourceDocument } from "@/types/content";

export interface DocumentListProps {
  documents: readonly ResourceDocument[];
  downloadLabel: string;
  comingSoonLabel: string;
}

/** Downloadable forms. Items without a file show "Coming soon" (no dead links). */
export function DocumentList({ documents, downloadLabel, comingSoonLabel }: DocumentListProps) {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
      {documents.map((doc) => (
        <li key={doc.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
          <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary-50 text-heading">
            <FileText aria-hidden className="size-6" strokeWidth={1.5} />
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-wide text-accent-ink uppercase">
              {doc.category}
            </p>
            <h3 className="mt-1 font-sans text-base font-semibold">{doc.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
          </div>
          {doc.file ? (
            <a
              href={doc.file.href}
              download
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Download aria-hidden />
              {downloadLabel}
              <span className="text-muted-foreground">
                ({doc.file.format}, {doc.file.sizeLabel})
              </span>
              <span className="sr-only">: {doc.title}</span>
            </a>
          ) : (
            <Badge variant="neutral" className="w-fit">
              {comingSoonLabel}
            </Badge>
          )}
        </li>
      ))}
    </ul>
  );
}
