import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { WelcomeNotice } from "@/components/WelcomeNotice";
import {
  featuredServices,
  guides,
  heroSlides,
  metrics,
} from "@/data/siteContent";

export default function HomePage() {
  return (
    <main className="page-shell" id="top">
      <Header />
      <WelcomeNotice />
      <HeroCarousel slides={heroSlides} />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="section-tag">Portal académico institucional</p>
          <h2>Dirección de Servicios Académicos</h2>
          <p className="hero-text">
            La Dirección de Servicios Académicos centraliza la orientación, la gestión documentaria y la
            información clave para estudiantes, egresados y usuarios que requieren trámites académicos
            con respaldo institucional.
          </p>
          <div className="hero-actions">
            <Link href="/tramites/certificaciones" className="button button-primary">
              Ver certificaciones
            </Link>
            <a href="#oficina" className="button button-secondary">
              Conocer la oficina
            </a>
          </div>
          <div className="launch-note">
            <span className="launch-badge">Nuevo</span>
            <p>
              <strong>SisacApp+ 1.2</strong> se lanzará en Play Store y App Store para revisar
              información académica de estudiantes de pregrado, posgrado y segundas especialidades.
            </p>
          </div>
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="campus-card">
            <div className="campus-image" role="img" aria-label="Vista referencial de la Universidad Nacional de San Agustín de Arequipa" />
            <div className="campus-overlay">
              <p className="overlay-tag">UNSA</p>
              <h3>Servicios académicos con presencia institucional y enfoque promocional.</h3>
              <p>Diseño orientado a confianza, claridad y acceso rápido para la comunidad universitaria.</p>
            </div>
          </div>
          <div className="sisac-card">
            <img src="/branding/sisacapp.png" alt="Logo SisacApp+" className="sisac-image" />
            <div>
              <p className="overlay-tag">próximo lanzamiento</p>
              <h3>SisacApp+ 1.2 destacada como nueva aplicación institucional</h3>
              <p>
                Aplicación para consultar información académica de estudiantes de pregrado, posgrado y
                segundas especialidades desde dispositivos móviles android y ios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="oficina">
        <div className="section-heading">
          <p className="section-tag">Información general</p>
          <h2>Una oficina pensada para orientar, resolver y dar trazabilidad a cada trámite.</h2>
        </div>
        <div className="two-column-layout">
          <article className="feature-panel">
            <h3>Qué comunica la página principal</h3>
            <p>
              La portada reúne la identidad visual de la Dirección de Servicios Académicos, la
              presentación de la oficina, accesos prioritarios, trámites más consultados junto a una guía
              paso a paso.
            </p>
            <ul className="check-list">
              <li>Misión de servicio y orientación académica.</li>
              <li>Horarios, atención, ubicación y canales oficiales.</li>
              <li>Accesos destacados a certificaciones y consultas.</li>
            </ul>
          </article>

          <article className="feature-panel">
            <h3>Canales de atención y acompañamiento</h3>
            <p>
              El portal está pensado para orientar mejor al estudiante con acceso rápido a
              certificaciones, guías, modalidad presencial o virtual y novedades como el lanzamiento de
              SisacApp+ 1.2.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section" id="tramites">
        <div className="section-heading">
          <p className="section-tag">Trámites destacados</p>
          <h2>Redireccionamiento claro hacia los servicios que realiza la oficina.</h2>
        </div>
        <div className="service-grid">
          {featuredServices.map((service) => (
            <article key={service.title} className="service-card">
              <span className="pill">{service.badge}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <Link href={service.path} className="text-link">
                Ir al módulo
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="guias">
        <div className="section-heading">
          <p className="section-tag">Guía al usuario</p>
          <h2>Un recorrido simple para que el estudiante sepa cómo empezar.</h2>
        </div>
        <div className="guide-grid">
          {guides.map((guide) => (
            <article key={guide.step} className="guide-card">
              <span>{guide.step}</span>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
