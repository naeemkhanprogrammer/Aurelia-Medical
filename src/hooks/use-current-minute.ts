import { useSyncExternalStore } from "react";

const MINUTE = 60_000;

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, MINUTE);
  return () => window.clearInterval(id);
};
/** Snapshot only changes once per minute → subscribers re-render at most once a minute. */
const getMinute = () => Math.floor(Date.now() / MINUTE);
/** No clock on the server: static HTML never contains time-dependent markup (no hydration mismatch). */
const getServerMinute = () => null;

/**
 * The current time, rounded to the minute, or `null` during SSR / before hydration.
 * Use for live UI such as "Open now" or "Today" highlights.
 */
export function useCurrentMinute(): Date | null {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);
  return minute === null ? null : new Date(minute * MINUTE);
}
