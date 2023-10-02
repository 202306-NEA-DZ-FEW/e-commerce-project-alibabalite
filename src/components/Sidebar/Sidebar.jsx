import React, { useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { FiSearch } from "react-icons/fi"
import { FaStar } from "react-icons/fa"

function Sidebar({
  categories,
  categoryFilter,
  setCategoryFilter,
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setRatingFilter,
  titleFilter,
  setTitleFilter,
}) {
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
    <aside className="sidebar ">
      {/* Sidebar filters go here */}
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <label htmlFor="category" className="text-lg text-w ">
        Category:
      </label>
      <select
        id="category"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="w-full mt-1 p-2 border rounded-md"
      >
        <option value="all">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="mt-3 ml-2 mr-2">
        <label htmlFor="price" className="text-lg font-medium py-2">
          Price:
        </label>
        <div className="relative mt-4">
          <Slider
            range
            min={0}
            max={2000}
            value={priceFilter}
            onChange={setPriceFilter}
            trackStyle={{ backgroundColor: "blue" }}
            handleStyle={[
              { backgroundColor: "blue", border: "2px solid white" },
              { backgroundColor: "blue", border: "2px solid white" },
            ]}
          />
          <div className="flex left-0 top-0 right-0 -mt-8 text-center">
            <span className="text-gray-500 mb-10">Min: ${priceFilter[0]}</span>
            <span className="text-gray-500 ml-auto">
              Max: ${priceFilter[1]}
            </span>
          </div>
        </div>
      </div>
      <label htmlFor="rating" className="text-lg font-medium mt-4">
        Rating:
      </label>
      <div className="flex mt-1">{stars}</div>
      <label htmlFor="title" className="text-lg font-medium mt-4">
        Search by Title:
      </label>
      <input
        type="text"
        id="title"
        placeholder="Search by Title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        className="w-full mt-1 p-2 border rounded-md"
      />
    </aside>
  )
}

export default Sidebar
