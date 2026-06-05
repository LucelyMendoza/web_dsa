import Link from "next/link";
import { CertificationExplorer } from "@/components/CertificationExplorer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { certificationCatalog, certificationGuide } from "@/data/siteContent";

export default function CertificationsPage() {
  return (
    <main className="page-shell" id="top">
      <Header />

      <section className="subpage-hero subpage-hero-accent">
        <div>
          <p className="section-tag">Certificaciones académicas</p>
          <h2>Certificaciones: Procedimientos paso a paso</h2>
          <p>
            Explora las distintas certificaciones, constancias y regularizaciones disponibles con una
            guía breve y clara para el estudiante.
          </p>
        </div>
        <Link href="/" className="button button-secondary">
          Volver al inicio
        </Link>
      </section>

      <section className="content-section certification-section">
        <div className="service-intro-grid">
          {certificationGuide.helperSteps.map((step, index) => (
            <article key={step.title} className="service-intro-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="record-banner">
          <div>
            <p className="section-tag">Canales generales</p>
            <h3>¿Cómo se gestionan la mayoría de certificaciones?</h3>
          </div>
          <div className="record-badges">
            <article className="record-badge">
              <span>Presencial</span>
              <strong>{certificationGuide.commonInPerson}</strong>
            </article>
            <article className="record-badge">
              <span>Virtual</span>
              <strong>{certificationGuide.commonVirtual}</strong>
            </article>
            <article className="record-badge">
              <span>Entrega</span>
              <strong>{certificationGuide.commonDelivery}</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-tag">Catálogo de trámites</p>
          <h2>Selecciona una categoría y revisa el procedimiento completo</h2>
          <p className="formal-paragraph">
            En la izquierda puedes elegir la categoría y el trámite; a la derecha verás el detalle
            completo, ordenado paso a paso.
          </p>
        </div>
        <CertificationExplorer catalog={certificationCatalog} />
      </section>

      <Footer />
    </main>
  );
}
