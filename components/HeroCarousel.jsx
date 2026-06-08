"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-carousel" aria-label="Noticias y anuncios destacados">
      <div className="hero-carousel-panel">
        {slides.map((slide, index) => (
          <article
            key={slide.title}
            className={`hero-slide ${index === activeIndex ? "hero-slide-active" : ""}`}
            aria-hidden={index !== activeIndex}
            style={slide.image ? { "--hero-slide-image": `url(${slide.image})` } : undefined}
          >
            <div className="hero-slide-content">
              <p className="section-tag hero-slide-tag">{slide.tag}</p>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              {slide.ctaLabel ? (
                <Link href={slide.ctaHref} className="button button-primary">
                  {slide.ctaLabel}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="hero-carousel-controls" aria-label="Seleccionar anuncio">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`hero-dot ${index === activeIndex ? "hero-dot-active" : ""}`}
            aria-label={`Mostrar anuncio ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
