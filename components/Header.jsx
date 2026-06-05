"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "La oficina", href: isHome ? "#oficina" : "/#oficina" },
    { label: "Trámites", href: isHome ? "#tramites" : "/#tramites" },
    { label: "Guías", href: isHome ? "#guias" : "/#guias" },
    { label: "Certificaciones", href: "/tramites/certificaciones" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="brand-shell">
          <Link href="/" className="brand-mark" aria-label="Inicio Dirección de Servicios Académicos">
            <div className="brand-logo-frame">
              <img src="/branding/unsa-main.png" alt="Logo de la UNSA" className="brand-logo" />
            </div>
          </Link>
          <div className="brand-copy">
            <p className="eyebrow">Universidad Nacional de San Agustín de Arequipa</p>
            <h1>Dirección de Servicios Académicos</h1>
            <p className="subcopy">Portal institucional para información, orientación y trámites académicos.</p>
          </div>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menú de navegación"
          onClick={() => setIsMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="top-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                (item.href === "/tramites/certificaciones" && pathname === "/tramites/certificaciones") ||
                (item.href === "/" && pathname === "/")
                  ? "nav-active"
                  : ""
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className={`mobile-overlay ${isMenuOpen ? "mobile-overlay-open" : ""}`} onClick={closeMenu} />
      <aside
        id="mobile-menu"
        className={`mobile-sidebar ${isMenuOpen ? "mobile-sidebar-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-sidebar-top">
          <div className="mobile-brand">
            <div className="mobile-brand-logo">
              <img src="/branding/unsa-main.png" alt="Logo de la UNSA" className="brand-logo" />
            </div>
            <div>
              <p className="eyebrow">UNSA</p>
              <h2>Dirección Servicios Académicos</h2>
            </div>
          </div>
          <button type="button" className="menu-close" aria-label="Cerrar menú" onClick={closeMenu}>
            ×
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={
                (item.href === "/tramites/certificaciones" && pathname === "/tramites/certificaciones") ||
                (item.href === "/" && pathname === "/")
                  ? "nav-active"
                  : ""
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-sidebar-footer">
          <p>UNSA</p>
        </div>
      </aside>
    </>
  );
}
