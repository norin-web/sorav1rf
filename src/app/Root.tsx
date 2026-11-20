import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./content/site";
import { useGlowFollow } from "./utils/motion";

const titles: Record<string, string> = {
  "/app": "The App",
  "/support": "Support",
  "/contact": "Contact",
  "/feedback": "Contact",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

export default function Root() {
  const { pathname } = useLocation();
  useGlowFollow();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = titles[pathname.replace(/\/$/, "")];
    // brand first, so a narrow browser tab still shows the app name
    document.title = t ? `${site.brand} — ${t}` : `${site.brand} — AI video creator for iPhone`;
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
