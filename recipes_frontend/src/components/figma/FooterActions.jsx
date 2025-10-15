import React, { memo } from "react";

/**
 * FooterActions
 * Displays an iOS-style home indicator centered at the bottom.
 */
// PUBLIC_INTERFACE
function FooterActions() {
  return (
    <div className="home-indicator" aria-hidden="true">
      <div className="home-indicator-line" />
    </div>
  );
}

export default memo(FooterActions);
