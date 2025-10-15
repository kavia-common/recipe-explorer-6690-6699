import React, { memo } from "react";

/**
 * MetaRow
 * Displays the small counters row: "1 serve" and "10 Items".
 * - Matches heights and spacing from Figma for pixel accuracy.
 */
// PUBLIC_INTERFACE
function MetaRow({ serveText = "1 serve", itemsText = "10 Items" }) {
  return (
    <div className="meta-rows" role="group" aria-label="Recipe counters">
      <div className="row serve" role="group" aria-label="Serving">
        <div className="serve-icon" aria-hidden="true">
          <div className="serve-icon-glyph"></div>
        </div>
        <div className="serve-text">{serveText}</div>
      </div>
      <div className="row items" role="group" aria-label="Items count">
        <div className="items-text">{itemsText}</div>
      </div>
    </div>
  );
}

export default memo(MetaRow);
