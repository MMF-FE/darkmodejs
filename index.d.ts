export declare enum Theme {
  DARK = "dark",
  LIGHT = "light",
  NO_PREF = "no-preference",
  NO_SUPP = "no-support"
}

export interface Config {
  onChange: (activeTheme: Theme, themes: typeof Theme) => void;
}

export interface DarkModeJSInstance {
  removeListeners: () => void;
}

export interface SupportInfo {
  darkQuery: MediaQueryList;
  lightQuery: MediaQueryList;
  noPrefQuery: MediaQueryList;
  isSupported: boolean;
}

export interface DarkModeJS {
  (config: Config): DarkModeJSInstance;
  getSupportInfo(): SupportInfo;
  getThemes(): Theme;
}

// declare function (config: Config): DarkModeJSInstance;
declare let darkmodejs: DarkModeJS;

export default darkmodejs;
