import React from "react"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { TbShoppingCartPlus } from "react-icons/tb"
// import Link from "next/link"
// import { genresList } from "@/utils/static"

const ProductCard = ({ key, rating, price, title, thumbnail }) => {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating / 2)
    const hasHalfStar = (rating / 2) % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          <BsStarFill />
        </span>,
      )
    }

    if (hasHalfStar && stars.length < 5) {
      stars.push(
        <span key={fullStars} className="text-yellow-400">
          <BsStarHalf />
        </span>,
      )
    }

    while (stars.length < 5) {
      stars.push(
        <span key={stars.length} className="text-gray-400">
          <BsStar />
        </span>,
      )
    }
    return stars
  }
  return (
    <div className=" flex-wrap rounded-lg overflow-hidden shadow-lg w-60 h-66 flex-shrink-1 mr-2 ml-2 mb-2 mt-2 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div>
        <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      </div>

      <div className="flex flex-col justify-between h-full ">
        <div className=" top-0 left-0 w-full p-3 text-white transition-opacity duration-300 ease-in-out opacity-100">
          <h2 className="text-sm font-bold text-black ">{title}</h2>
          <p className="my-1 flex list-none gap-0.5 p-0 mt-1">
            {renderStars()}
          </p>
          <p className="font-bold text-red-700 text-sm mt-3">${price}</p>
        </div>
        <div className="px-6 mb-2 flex justify-end">
          <button className="bg-gray-500 hover:bg-yellow-500 text-white font-semibold px-4 py-1 rounded-lg inline-flex items-center">
            <TbShoppingCartPlus className="mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
