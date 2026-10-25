"use client";

import React, { useEffect } from "react";

export default function SecurityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Disable Right Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable Keyboard Shortcuts for DevTools, View Source, and Saving
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 key
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element picker)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")
      ) {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        return false;
      }

      // Ctrl+S (Save page)
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Clear console periodically and show warning
    const clearConsole = () => {
      try {
        console.clear();
        console.log(
          "%cSarriaTech Solutions S.A.S. - Sistema Protegido",
          "color: #00E5FF; font-size: 20px; font-weight: bold; background: #03040B; padding: 10px; border-radius: 8px;"
        );
        console.log(
          "%cEl código fuente e interfaces de este sitio están protegidos por derechos de autor y políticas de seguridad corporativas.",
          "color: #A8B3D1; font-size: 12px;"
        );
      } catch {
        // ignore
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    clearConsole();
    const intervalId = setInterval(clearConsole, 12000);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, []);

  return <>{children}</>;
}
