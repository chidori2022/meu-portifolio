"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

function PrintDarkTheme() {
  const { resolvedTheme } = useTheme();
  const themeBeforePrint = React.useRef<string | undefined>(undefined);

  React.useEffect(() => {
    const onBeforePrint = () => {
      themeBeforePrint.current = resolvedTheme;
      document.documentElement.classList.add("dark");
    };

    const onAfterPrint = () => {
      if (themeBeforePrint.current === "light") {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, [resolvedTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <PrintDarkTheme />
      {children}
    </NextThemesProvider>
  );
}
