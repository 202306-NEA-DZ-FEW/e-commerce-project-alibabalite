import React, { useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

function Sidebar({
  categories,
  categoryFilter,
  setCategoryFilter,
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setratingFilter,
  titleFilter,
  settitleFilter,
}) {
  console.log("hello")
  return (
    <aside className="sidebar">
      {/* Sidebar filters go here */}
      <h2>Filters</h2>
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="price">Price:</label>
      <Slider
        range
        min={0}
        max={2000}
        value={priceFilter}
        onChange={setPriceFilter}
        trackStyle={{ backgroundColor: "blue" }} // Change the track color
        handleStyle={[
          { backgroundColor: "blue", border: "2px solid white" }, // Change the handle color and add a border
        ]}
      />
      {/* Add more options as needed */}
      <StarRatingSlider
        ratingFilter={ratingFilter}
        setRatingFilter={setratingFilter}
      />
      <input
        type="text"
        placeholder="Search by Title"
        value={titleFilter}
        onChange={(e) => settitleFilter(e.target.value)}
      />
    </aside>
  )
}

export default Sidebar

function StarRatingSlider({ ratingFilter, setRatingFilter }) {
  const maxRating = 5 // Set the maximum rating here
  const [hoverRating, setHoverRating] = useState(null)

  const handleMouseEnter = (rating) => {
    setHoverRating(rating)
  }

  const handleMouseLeave = () => {
    setHoverRating(null)
  }

  const handleRatingClick = (rating) => {
    setRatingFilter(rating)
  }

  const stars = []

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span
        key={i}
        className={`cursor-pointer text-xl ${
          i <= (hoverRating || ratingFilter)
            ? "text-yellow-500"
            : "text-gray-300"
        }`}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleRatingClick(i)}
      >
        ★
      </span>,
    )
  }

  return (
    <div>
      <p>Filter by Rating:</p>
      <div className="flex">{stars}</div>
    </div>
  )
}
