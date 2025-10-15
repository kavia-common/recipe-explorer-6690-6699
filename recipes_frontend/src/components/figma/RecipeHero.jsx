import React, { useState, memo } from "react";

/**
 * RecipeHero
 * Shows the hero card: cover image, rating, title, bookmark button, cook time, and reviews.
 * - Uses positions and dimensions from the Figma export for pixel accuracy.
 * - Bookmark toggles aria-pressed for accessibility.
 */
// PUBLIC_INTERFACE
function RecipeHero({
  imageSrc = "/assets/figmaimages/figma_image_100_2329.png",
  title = "Spicy chicken burger with French fries",
  rating = "4.0",
  timeText = "20 min",
  reviewsText = "(13k Reviews)",
}) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <section className="card" aria-labelledby="recipe-title">
      <div className="card-image">
        <img
          src={imageSrc}
          alt={title}
          width="315"
          height="150"
          decoding="async"
          fetchpriority="high"
          loading="eager"
        />
      </div>

      <div className="rating" aria-label={`Rating ${rating} out of 5`}>
        <svg className="star" width="8" height="8" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="#F59E0B" d="M12 17.27L18.18 21l-1.64-7.03L22 9.244l-7.19-.62L12 2 9.19 8.624 2 9.244l5.46 4.726L5.82 21z"/>
        </svg>
        <span className="rating-text">{rating}</span>
      </div>

      <h1 id="recipe-title" className="food-title">{title}</h1>

      <button
        className="bookmark icon-btn"
        aria-pressed={bookmarked ? "true" : "false"}
        aria-label={bookmarked ? "Remove from favorites" : "Add to favorites"}
        onClick={() => setBookmarked((v) => !v)}
      >
        <svg className="bookmark-icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18l-7-3-7 3V4z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>

      <div className="meta-time" aria-label="Cooking time">
        <svg className="timer" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2"></circle>
          <path d="M12 10v4l3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 2h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="time-text">{timeText}</span>
      </div>

      <div className="reviews">
        <span className="reviews-text">{reviewsText}</span>
      </div>
    </section>
  );
}

export default memo(RecipeHero);
