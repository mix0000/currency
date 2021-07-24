import { Theme } from "./theme";

const darkColorSchemeMatchMedia = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

export const isDarkColorScheme = (): boolean =>
  darkColorSchemeMatchMedia.matches;

export const watchColorSchemeChange = (listener: (theme: Theme) => void) => {
  darkColorSchemeMatchMedia.addEventListener("change", () => {
    listener(isDarkColorScheme() ? Theme.DARK : Theme.LIGHT);
  });
};
