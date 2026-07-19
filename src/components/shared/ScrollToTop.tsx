import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Router-level utility: without this, navigating Home -> About keeps the old scroll
// position, which reads as broken on a "premium" site. Skips reset when the URL has a
// hash (e.g. /#doctors) so in-page anchor links still work as expected. Also moves
// focus to the page's main landmark so screen reader users get an announcement on
// route change, since SPA navigation doesn't trigger the browser's native focus reset.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.getElementById("main-content")?.focus();
  }, [pathname, hash]);

  return null;
}
