import React, { memo } from "react";

/**
 * HeaderBar
 * Renders the top header with a back button and a more options button.
 * - Uses inline SVGs to avoid missing asset 404s
 * - Semantics: <header> with aria-label
 * - Focus: relies on global focus-visible styles
 */
// PUBLIC_INTERFACE
function HeaderBar({ onBack, onMore }) {
  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
      return;
    }
    if (typeof window !== "undefined") {
      if (window.history.length > 1) window.history.back();
      else window.location.href = "/";
    }
  };

  const handleMore = () => {
    if (typeof onMore === "function") onMore();
  };

  return (
    <header className="header" aria-label="Recipe header">
      <button className="icon-btn back" aria-label="Back" onClick={handleBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M14 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="icon-btn more" aria-label="More options" onClick={handleMore}>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="5" cy="12" r="2" fill="currentColor"></circle>
          <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
          <circle cx="19" cy="12" r="2" fill="currentColor"></circle>
        </svg>
      </button>
    </header>
  );
}

export default memo(HeaderBar);
