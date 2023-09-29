import React from "react"
import { AiFillThunderbolt } from "react-icons/ai"
import { TbShoppingCartPlus } from "react-icons/tb"
// import Link from "next/link"
// import { genresList } from "@/utils/static"

const FlashCard = ({ discountPercentage, price, title, thumbnail }) => {
  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    const discount = (discountPercentage / 100) * originalPrice
    return (originalPrice - discount).toFixed(2)
  }

  return (
    <div className=" flex-wrap rounded-lg overflow-hidden shadow-lg w-60 h-66 flex-shrink-1 mr-2 ml-2 mb-2 mt-2 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-red-500 p-2 bg-yellow-500 text-black font-bold text-sm ">
          <AiFillThunderbolt />
          {`-${Math.round(discountPercentage)}%`}
        </div>
        <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      </div>

      <div className="flex flex-col justify-between h-full ">
        <div className=" top-0 left-0 w-full p-3 text-white transition-opacity duration-300 ease-in-out opacity-100">
          <h2 className="text-sm font-bold text-black ">{title}</h2>
          <div className="flex ">
            <span className="font-bold text-red-600 text-sm mt-1 mr-4">
              $ {calculateDiscountedPrice(price, discountPercentage)}
            </span>
            <p className="original-price line-through text-gray-500 ">
              ${price}
            </p>
          </div>
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

export default FlashCard
