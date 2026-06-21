import type { routing } from "./i18n/routing";

// Type the locale union for next-intl. Message keys are kept loosely typed
// (not augmenting `Messages`) because many keys are built dynamically from data
// modules; the messages.test.ts parity check guards against missing keys.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
  }
}
