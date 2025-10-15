import React, { useState, useEffect, useRef, memo } from "react";

/**
 * TabSwitcher
 * Accessible two-tab switcher for Ingredients vs Procedure.
 * - ARIA: role="tablist", role="tab", aria-selected, aria-controls
 * - Keyboard: ArrowLeft/Right + Home/End navigations
 * - Labels follow Figma text exactly: "Ingrident" and "Procedure"
 */
// PUBLIC_INTERFACE
function TabSwitcher({ value, onChange }) {
  const [internalValue, setInternalValue] = useState(value || "ingredients");
  const tabsRef = useRef([]);

  useEffect(() => {
    if (value && value !== internalValue) setInternalValue(value);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const setValue = (next) => {
    setInternalValue(next);
    if (typeof onChange === "function") onChange(next);
  };

  const focusTab = (index) => {
    const el = tabsRef.current[index];
    if (el) el.focus();
  };

  const onKeyDown = (e) => {
    const order = ["ingredients", "procedure"];
    const current = order.indexOf(internalValue);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const idx = (current + 1) % order.length;
      setValue(order[idx]);
      focusTab(idx);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const idx = (current - 1 + order.length) % order.length;
      setValue(order[idx]);
      focusTab(idx);
    } else if (e.key === "Home") {
      e.preventDefault();
      setValue(order[0]);
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setValue(order[order.length - 1]);
      focusTab(order.length - 1);
    }
  };

  const isIngredients = internalValue === "ingredients";

  return (
    <nav className="tabs" role="tablist" aria-label="Recipe sections" onKeyDown={onKeyDown}>
      <button
        id="tab-ingredients"
        className={`tab ${isIngredients ? "active" : ""}`}
        role="tab"
        aria-selected={isIngredients ? "true" : "false"}
        aria-controls="panel-ingredients"
        ref={(el) => (tabsRef.current[0] = el)}
        onClick={() => setValue("ingredients")}
      >
        Ingrident
      </button>

      <button
        id="tab-procedure"
        className={`tab ${!isIngredients ? "active" : ""}`}
        role="tab"
        aria-selected={!isIngredients ? "true" : "false"}
        aria-controls="panel-procedure"
        ref={(el) => (tabsRef.current[1] = el)}
        onClick={() => setValue("procedure")}
      >
        Procedure
      </button>
    </nav>
  );
}

export default memo(TabSwitcher);
