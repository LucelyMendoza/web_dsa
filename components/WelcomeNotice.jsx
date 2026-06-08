"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dsa-welcome-notice-dismissed";

export function WelcomeNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const wasDismissed = window.localStorage.getItem(STORAGE_KEY);
    setIsVisible(wasDismissed !== "true");
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeNotice();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  const closeNotice = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="welcome-modal-layer">
      <aside className="welcome-notice" role="dialog" aria-modal="true" aria-label="Mensaje de bienvenida">
        <button type="button" className="welcome-close" aria-label="Cerrar aviso" onClick={closeNotice}>
          <span aria-hidden="true">&times;</span>
        </button>
        <p className="section-tag">Bienvenido</p>
        <h2>Bienvenido a la página web de la Dirección de Servicios Académicos</h2>
        <p>
          Aquí encontrarás noticias y procedimientos sobre certificaciones y distintos trámites presentes
          para la comunidad universitaria.
        </p>
      </aside>
    </div>
  );
}
