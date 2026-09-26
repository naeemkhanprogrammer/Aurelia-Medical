import { Accordion } from "@/components/ui/accordion";
import type { FaqCategory } from "@/types/content";

/** FAQ categories, each an accordion (native <details>, zero JS). */
export function FaqList({ categories }: { categories: readonly FaqCategory[] }) {
  return (
    <div className="flex flex-col gap-12">
      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-heading`}
          className="scroll-mt-28"
        >
          <h2 id={`${category.id}-heading`} className="text-h3">
            {category.title}
          </h2>
          <Accordion
            className="mt-5"
            exclusiveGroup={category.id}
            items={category.items.map((item) => ({
              id: item.id,
              title: item.question,
              content: (
                <div className="flex flex-col gap-3 leading-relaxed">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ),
            }))}
          />
        </section>
      ))}
    </div>
  );
}
