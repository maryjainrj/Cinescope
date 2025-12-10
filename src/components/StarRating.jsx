// ---------------------------------------------------------
// StarRating.jsx - Star Rating Display Component
// Member 3: Dinesh Babu Illamaran - Rating Components
// ---------------------------------------------------------

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating" aria-label={`Rating: ${rating} out of 5 stars`}>
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="star star-full" aria-hidden="true">
          ★
        </span>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <span className="star star-half" aria-hidden="true">
          ★
        </span>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="star star-empty" aria-hidden="true">
          ★
        </span>
      ))}

      {/* Rating Value */}
      <span className="rating-value ms-2">{rating.toFixed(1)}</span>
    </div>
  );
}

export default StarRating;
