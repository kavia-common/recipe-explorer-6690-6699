import React, { useCallback, useMemo, useState } from "react";
import HeaderBar from "../components/figma/HeaderBar";
import RecipeHero from "../components/figma/RecipeHero";
import MetaRow from "../components/figma/MetaRow";
import TabSwitcher from "../components/figma/TabSwitcher";
import IngredientList from "../components/figma/IngredientList";
import StepsList from "../components/figma/StepsList";
import FooterActions from "../components/figma/FooterActions";

/**
 * RecipeIngredient Page (Figma 100:2323)
 * - Pixel-accurate layout for 375x812 base with centered shell.
 * - Images load from /assets/figmaimages/ (copied to public/).
 * - Semantic regions: status header/main/nav/footer.
 * - Tabs implement ARIA and keyboard navigation.
 * - Focus-visible styles and reduced motion friendly.
 *
 * Summary of changes:
 * - Introduced modular components mirroring Figma layers.
 * - Converted Figma CSS to CSS variables in src/styles/recipeingrident-100-2323.css.
 * - Added conditional routing via App.js to mount this page at /recipe/ingredient.
 */
// PUBLIC_INTERFACE
function RecipeIngredient() {
  const [activeTab, setActiveTab] = useState("ingredients");
  const [isFollowing, setIsFollowing] = useState(false);

  const onBack = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) window.history.back();
      else window.location.href = "/";
    }
  }, []);

  const ingredientItems = useMemo(
    () => [
      { name: "Tomatos", qty: "500g", thumbSrc: "/assets/figmaimages/figma_image_100_2375.png" },
      { name: "Cabbage", qty: "300g" },
      { name: "Taco", qty: "300g" },
      { name: "Slice Bread", qty: "300g" },
      { name: "Green onion", qty: "300g" },
      { name: "Omelette", qty: "300g" },
      { name: "Hot Dog", qty: "300g" },
      { name: "Oninon", qty: "300g" },
      { name: "Lettuce", qty: "300g" },
      { name: "Spinach", qty: "300g" },
      { name: "Red & Green Chilli", qty: "300g" },
      { name: "Fries", qty: "300g" },
      { name: "Chicken", qty: "300g" },
      { name: "Burger", qty: "300g" },
    ],
    []
  );

  return (
    <main className="screen" aria-label="Recipe Ingredient Screen">
      {/* Status Bar (44px height) */}
      <div className="status-bar" aria-hidden="true">
        <div className="status-time">19:27</div>
      </div>

      {/* Header */}
      <HeaderBar onBack={onBack} />

      {/* Hero Card */}
      <RecipeHero
        imageSrc="/assets/figmaimages/figma_image_100_2329.png"
        title="Spicy chicken burger with French fries"
        rating="4.0"
        timeText="20 min"
        reviewsText="(13k Reviews)"
      />

      {/* Meta Row: 1 serve | 10 Items */}
      <MetaRow serveText="1 serve" itemsText="10 Items" />

      {/* Creator's Profile */}
      <section className="creator" aria-label="Creator profile">
        <div className="creator-left">
          <img
            className="creator-avatar"
            src="/assets/figmaimages/figma_image_100_2357.png"
            alt="Avatar of Laura wilson"
            width="40"
            height="40"
            decoding="async"
            loading="lazy"
          />
          <div className="creator-info">
            <div className="creator-name">Laura wilson</div>
            <div className="creator-location">
              <svg className="location-icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 21s-7-6.16-7-11a7 7 0 1 1 14 0c0 4.84-7 11-7 11z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" fill="currentColor"></circle>
              </svg>
              <span className="location-text">Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <button
          className="btn-small"
          aria-pressed={isFollowing ? "true" : "false"}
          onClick={() => setIsFollowing((v) => !v)}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </section>

      {/* Tabs */}
      <TabSwitcher value={activeTab} onChange={setActiveTab} />

      {/* Panels */}
      <IngredientList items={ingredientItems} hidden={activeTab !== "ingredients"} />
      <StepsList hidden={activeTab !== "procedure"} />

      {/* Footer Home Indicator */}
      <FooterActions />
    </main>
  );
}

export default RecipeIngredient;
