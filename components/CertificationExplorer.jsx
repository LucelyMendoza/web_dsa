"use client";

import { useMemo, useState } from "react";

export function CertificationExplorer({ catalog }) {
  const grouped = useMemo(() => {
    return catalog.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [catalog]);

  const categories = Object.keys(grouped);
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");
  const [activeItemName, setActiveItemName] = useState(grouped[categories[0]]?.[0]?.name ?? "");
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const items = grouped[activeCategory] ?? [];
  const activeItem =
    items.find((item) => item.name === activeItemName) ??
    items[0] ??
    catalog[0];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveItemName(grouped[category]?.[0]?.name ?? "");
    setShowMobileDetail(false);
  };

  const handleSelectItem = (name) => {
    setActiveItemName(name);
    setShowMobileDetail(true);
  };

  return (
    <section className="explorer-shell">
      <aside className={`explorer-sidebar ${showMobileDetail ? "explorer-mobile-hidden" : ""}`}>
        <div className="explorer-block">
          <p className="section-tag">Categorías</p>
          <div className="explorer-category-list">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`explorer-category ${category === activeCategory ? "explorer-active" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="explorer-block">
          <p className="section-tag">Trámites</p>
          <div className="explorer-item-list">
            {items.map((item) => (
              <button
                key={item.name}
                type="button"
                className={`explorer-item ${item.name === activeItem?.name ? "explorer-active" : ""}`}
                onClick={() => handleSelectItem(item.name)}
              >
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <article className={`explorer-detail ${showMobileDetail ? "explorer-detail-open" : ""}`}>
        <div className="explorer-mobile-top">
          <div>
            <p className="section-tag">Categoría</p>
            <h3>{activeCategory}</h3>
          </div>
          <button
            type="button"
            className="explorer-back"
            onClick={() => setShowMobileDetail(false)}
          >
            Volver al listado
          </button>
        </div>

        <div className="explorer-header">
          <div>
            <p className="catalog-kicker">Trámite seleccionado</p>
            <h3>{activeItem?.name}</h3>
          </div>
          <span className="catalog-price">{activeItem?.price}</span>
        </div>

        {activeItem?.validity ? <p className="activity-note">Vigencia: {activeItem.validity}</p> : null}

        <div className="explorer-grid">
          <div className="catalog-section">
            <h4>Aplica para</h4>
            <div className="chip-row">
              {activeItem?.audience.map((audience) => (
                <span key={audience} className="catalog-chip">
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <div className="catalog-section">
            <h4>Documentos a adjuntar</h4>
            <ul className="check-list compact-list">
              {activeItem?.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </div>
        </div>

        {activeItem?.notes.length ? (
          <div className="catalog-section">
            <h4>Consideraciones</h4>
            <ul className="check-list compact-list">
              {activeItem.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="explorer-procedure">
          <div className="explorer-step">
            <span className="explorer-step-number">1</span>
            <div>
              <h4>Procedimiento presencial</h4>
              <p>{activeItem?.procedure.presencial}</p>
            </div>
          </div>

          <div className="explorer-step">
            <span className="explorer-step-number">2</span>
            <div>
              <h4>Procedimiento virtual</h4>
              <p>{activeItem?.procedure.virtual}</p>
              <p>{activeItem?.procedure.sendTo}</p>
            </div>
          </div>

          {activeItem?.procedure.delivery ? (
            <div className="explorer-step">
              <span className="explorer-step-number">3</span>
              <div>
                <h4>Entrega del documento</h4>
                <p>{activeItem.procedure.delivery}</p>
              </div>
            </div>
          ) : null}

          {activeItem?.procedure.thirdParty.length ? (
            <div className="explorer-step">
              <span className="explorer-step-number">
                {activeItem.procedure.delivery ? "4" : "3"}
              </span>
              <div>
                <h4>Si interviene un tercero</h4>
                <ul className="check-list compact-list">
                  {activeItem.procedure.thirdParty.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </section>
  );
}
