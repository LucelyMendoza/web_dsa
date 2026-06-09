import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { featuredServices, guides, heroSlides } from "@/data/siteContent";

export default function HomePage() {
  return (
    <main className="page-shell" id="top">
      <Header />
      <HeroCarousel slides={heroSlides} />

      <section className="announcement-panel" aria-label="Anuncio institucional destacado">
        <span className="announcement-badge">Próximo lanzamiento</span>
        <div>
          <h2>SisacApp+ 1.2 llegará a Play Store y App Store</h2>
          <p>
            La nueva aplicación permitirá revisar información académica de pregrado, posgrado y segundas
            especialidades desde una experiencia más moderna y accesible.
          </p>
        </div>
      </section>

      <section className="info-section">
        <div className="info-cards-grid">
          <article className="info-card">
            <h3>Servicios académicos</h3>
            <p>
              Una oficina digital pensada para orientar trámites con mayor claridad. El portal reúne
              certificaciones, guías, requisitos y canales de atención.
            </p>
            <a href="#oficina" className="text-link">
              Conocer la oficina →
            </a>
          </article>
          <article className="info-card">
            <h3>Comunidad UNSA</h3>
            <p>
              Información institucional con acceso rápido para estudiantes y egresados. Noticias, accesos
              clave y procesos destacados.
            </p>
            <a href="#guias" className="text-link">
              Ir a guías →
            </a>
          </article>
          <article className="info-card">
            <h3>Portal académico institucional</h3>
            <p>
              La Dirección de Servicios Académicos centraliza orientación, gestión documentaria e
              información clave para la comunidad universitaria.
            </p>
            <Link href="/tramites/certificaciones" className="text-link">
              Ver certificaciones →
            </Link>
          </article>
        </div>
      </section>

      <section className="about-office" id="oficina">
        <div className="about-office-content">
          <div className="about-office-text">
            <h2>Una oficina pensada para orientar, resolver y dar trazabilidad a cada trámite</h2>
            <h3>Qué comunica la página principal</h3>
            <p>
              La portada reúne la identidad visual de la Dirección de Servicios Académicos, la presentación
              de la oficina, accesos prioritarios y una guía paso a paso.
            </p>
            <ul className="check-list">
              <li>Misión de servicio y orientación académica.</li>
              <li>Horarios, atención, ubicación y canales oficiales.</li>
              <li>Accesos destacados a certificaciones y consultas.</li>
            </ul>
            <h3>Canales de atención y acompañamiento</h3>
            <p>
              El portal está pensado para orientar mejor al estudiante con acceso rápido a certificaciones,
              guías, modalidad presencial o virtual y novedades institucionales.
            </p>
          </div>
          <aside className="metric-highlight" aria-label="Trámites académicos centralizados">
            <strong>10</strong>
            <span>Trámites académicos centralizados</span>
          </aside>
        </div>
      </section>

      <section className="services-section" id="tramites">
        <div className="section-heading centered-heading">
          <p className="section-tag">Trámites destacados</p>
          <h2>Redireccionamiento claro hacia los servicios que realiza la oficina</h2>
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

      <section className="guide-section" id="guias">
        <div className="section-heading centered-heading">
          <p className="section-tag">Guía al usuario</p>
          <h2>Un recorrido simple para que el estudiante sepa cómo empezar</h2>
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

      <section className="sisacapp-section">
        <div className="sisacapp-content">
          <span className="announcement-badge">Nuevo</span>
          <h2>SisacApp+ 1.2 destacada como nueva aplicación institucional</h2>
          <p>
            Aplicación para revisar información académica de estudiantes de pregrado, posgrado y segundas
            especialidades desde dispositivos móviles.
          </p>
          <div className="feature-list">
            <article className="feature-item">
              <h3>Acceso multiplataforma</h3>
              <p>Disponible en Play Store y App Store.</p>
            </article>
            <article className="feature-item">
              <h3>Información actualizada</h3>
              <p>Datos académicos en tiempo real.</p>
            </article>
            <article className="feature-item">
              <h3>Interfaz moderna</h3>
              <p>Experiencia accesible e intuitiva.</p>
            </article>
            <article className="feature-item">
              <h3>Soporte integral</h3>
              <p>Para todos los niveles de estudios.</p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
