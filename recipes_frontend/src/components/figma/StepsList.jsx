import React, { memo } from "react";

/**
 * StepsList
 * Placeholder for procedure content. Use a simple container per design.
 */
// PUBLIC_INTERFACE
function StepsList({ steps = [], hidden = false }) {
  return (
    <section
      id="panel-procedure"
      className="procedure-panel"
      role="tabpanel"
      aria-labelledby="tab-procedure"
      hidden={hidden}
    >
      {steps.length === 0 ? (
        <div className="procedure-placeholder">Procedure content goes here.</div>
      ) : (
        <ol>
          {steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default memo(StepsList);
