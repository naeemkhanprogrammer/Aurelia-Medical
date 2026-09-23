import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// `server-only` throws outside a React Server environment; tests exercise the data layer directly.
vi.mock("server-only", () => ({}));
