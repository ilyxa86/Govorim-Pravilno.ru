import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const storageKey = `scroll-position:${location.key}`;
    const savedPosition = sessionStorage.getItem(storageKey);
    let frame = 0;
    let retryTimer = 0;
    let cancelled = false;

    const savePosition = () => {
      sessionStorage.setItem(storageKey, String(window.scrollY));
    };

    window.addEventListener("scroll", savePosition, { passive: true });

    if (navigationType === "POP" && savedPosition !== null) {
      const scrollY = Number(savedPosition);
      const targetY = Number.isFinite(scrollY) ? scrollY : 0;
      let attempts = 0;

      const restorePosition = () => {
        if (cancelled) return;
        window.scrollTo({ top: targetY, behavior: "auto" });
        attempts += 1;

        // Lazy-loaded pages can initially be too short. Retry until their
        // content is mounted so Back returns to the exact previous position.
        if (Math.abs(window.scrollY - targetY) > 2 && attempts < 40) {
          retryTimer = window.setTimeout(restorePosition, 50);
        }
      };

      frame = window.requestAnimationFrame(restorePosition);
    } else if (location.hash) {
      let attempts = 0;
      const scrollToSection = () => {
        if (cancelled) return;
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        attempts += 1;
        if (attempts < 40) retryTimer = window.setTimeout(scrollToSection, 50);
      };

      frame = window.requestAnimationFrame(scrollToSection);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retryTimer);
      window.removeEventListener("scroll", savePosition);
      savePosition();
    };
  }, [location.hash, location.key, navigationType]);

  return null;
}
