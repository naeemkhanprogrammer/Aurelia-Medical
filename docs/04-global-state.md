# 04 — Global state

**Rule:** state goes global only when components in _different branches_ of the tree need it. Everything else is local (`useState`) or derived.

## Zustand stores (`src/store/`)

| Store         | State                                            | Why global                                                                                             |
| ------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `ui-store.ts` | `isMobileNavOpen` + `open/close/toggleMobileNav` | The toggle (in the header bar) and the drawer (`MobileNav`) are siblings; route changes also close it. |

Components subscribe through **atomic selectors** (`selectIsMobileNavOpen`, …) so they re-render only for the slice they read.

## Deliberately local

| State                          | Component         | Reason                                                                                                        |
| ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| Specialty filter               | `DoctorDirectory` | Only this component reads it; keeps page static. (Could move to URL search params if deep-linking is wanted.) |
| Service / visit type selection | `QuickBookingBar` | Used only to build the outbound link.                                                                         |
| Carousel edge state            | `Carousel`        | Per-instance UI.                                                                                              |

## Not added (yet)

- **Theme store:** re-theming is done with CSS variables (docs/03). A store is only needed if a runtime theme switcher (e.g. dark mode) is requested.
- **TanStack Query:** added with the first server-backed feature.
