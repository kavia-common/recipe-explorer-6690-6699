import React, { memo } from "react";

/**
 * IngredientList
 * Renders the list of ingredient rows based on Figma groups.
 * - Only uses available images to avoid 404s; others use a plain placeholder block.
 */
// PUBLIC_INTERFACE
function IngredientList({ items = [], hidden = false }) {
  return (
    <section
      id="panel-ingredients"
      className="ingredients-panel"
      role="tabpanel"
      aria-labelledby="tab-ingredients"
      hidden={hidden}
    >
      <ul className="ingredients-list" role="list">
        {items.map((it, idx) => (
          <li key={`${it.name}-${idx}`} className="ingredient-row">
            <div className="thumb" aria-hidden="true">
              {it.thumbSrc ? (
                <img
                  className="thumb-img"
                  src={it.thumbSrc}
                  alt={it.name}
                  width="40"
                  height="40"
                  decoding="async"
                  loading="lazy"
                />
              ) : (
                <div className="thumb-bg thumb-bg-plain" />
              )}
            </div>
            <div className="ingredient-name">{it.name}</div>
            <div className="ingredient-qty">{it.qty}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default memo(IngredientList);
