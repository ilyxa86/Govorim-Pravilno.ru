import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";
import svetlanaLogo from "@/assets/svetlana-logo-small.jpg";

const navItems = [
  { id: "glavnaya", label: "Главная" },
  { id: "obo-mne", label: "Обо мне" },
  { id: "uslugi", label: "Услуги" },
  { id: "otzyvy", label: "Отзывы" },
  { id: "materialy", label: "Материалы и игры" },
  { id: "blog", label: "Блог" },
  { id: "kontakty", label: "Контакты" },
] as const;

const routeSections: Array<[string, string]> = [
  ["/about", "obo-mne"],
  ["/services", "uslugi"],
  ["/materials", "materialy"],
  ["/reviews", "otzyvy"],
  ["/blog", "blog"],
  ["/contacts", "kontakty"],
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("glavnaya");
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);

    if (!isHome) {
      const section = routeSections.find(([path]) => location.pathname.startsWith(path));
      setActiveSection(section?.[1] ?? "");
      return;
    }

    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false);
    if (!isHome) return;

    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", id === "glavnaya" ? "/" : `/#${id}`);
    setActiveSection(id);
  };

  const renderNavigation = (mobile = false) => (
    <nav aria-label={mobile ? "Мобильная навигация" : "Основная навигация"}>
      <div className={mobile ? "flex flex-col gap-1" : "flex items-center gap-1"}>
        {navItems.map((item) => {
          const active = activeSection === item.id;
          const destination = item.id === "glavnaya" ? "/" : `/#${item.id}`;

          return (
            <Link
              key={item.id}
              to={destination}
              onClick={(event) => handleSectionClick(event, item.id)}
              aria-current={active ? "location" : undefined}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${
                mobile ? "flex min-h-12 items-center text-base" : "font-medium"
              } ${
                active
                  ? "bg-primary/10 text-primary ring-1 ring-primary/25"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/85">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Говорим правильно — на главную">
            <img
              src={svetlanaLogo}
              alt=""
              width="48"
              height="48"
              className="h-9 w-9 shrink-0 rounded-full border-2 border-primary/20 object-cover sm:h-11 sm:w-11"
            />
            <span className="min-w-0 leading-tight">
              <span className="block whitespace-nowrap text-[13px] font-bold text-primary sm:text-lg">Говорим правильно</span>
              <span className="block whitespace-nowrap text-[8px] font-medium text-muted-foreground sm:text-xs">
                Светлана Геннадьевна Коновалова
              </span>
            </span>
          </Link>

          <div className="hidden xl:block">{renderNavigation()}</div>

          <button
            type="button"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-full hover:bg-muted xl:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && <div className="border-t py-3 xl:hidden">{renderNavigation(true)}</div>}
      </div>
    </header>
  );
};

export default Header;
