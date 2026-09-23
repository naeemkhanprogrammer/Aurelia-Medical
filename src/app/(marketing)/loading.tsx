import { LogoMark } from "@/components/shared/logo";
import { uiStrings } from "@/data/common";

export default function Loading() {
  return (
    <div role="status" className="grid min-h-[60vh] place-items-center">
      <LogoMark className="size-14 animate-pulse" />
      <span className="sr-only">{uiStrings.loading}</span>
    </div>
  );
}
