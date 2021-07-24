import {
  createEffect,
  createEvent,
  forward,
  restore,
  sample
} from "effector-logger";

import { appendElement, createLink, removeElement } from "../utils/createLink";
import {
  isDarkColorScheme,
  watchColorSchemeChange
} from "../utils/getDefaultTheme";
import { Theme } from "../utils/theme";

const LINK_ID = "antd-dark-theme";
const ANTD_DARK_THEME_LINK =
  "https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.8/antd.dark.min.css";

export const changeTheme = createEvent<Theme>();
export const changeThemeFx = createEffect<Theme, void>();
export const $theme = restore(changeTheme, Theme.DARK);
export const toggleTheme = createEvent();

sample({
  clock: toggleTheme,
  source: $theme,
  fn: source => (source === Theme.LIGHT ? Theme.DARK : Theme.LIGHT),
  target: changeTheme
});

forward({
  from: $theme,
  to: changeThemeFx
});

changeThemeFx.use(source => {
  switch (source) {
    case Theme.DARK: {
      appendElement(createLink(ANTD_DARK_THEME_LINK, LINK_ID), document.head);
      break;
    }
    case Theme.LIGHT: {
      removeElement(`#${LINK_ID}`);
      break;
    }
    default:
      break;
  }
});

changeThemeFx(isDarkColorScheme() ? Theme.DARK : Theme.LIGHT);
watchColorSchemeChange(changeTheme);
