import React from "react"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { TbShoppingCartPlus } from "react-icons/tb"
import { useContext } from "react"
import Link from "next/link"
import { BsBagPlus, BsEyeFill } from "react-icons/bs"
import Image from "next/image"
import { CartContext } from "@/contexts/CartProvider"

const ProductCard = ({ product }) => {
  const { thumbnail, title, description, rating, price, id } = product
  const { addToCart } = useContext(CartContext)
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
    <div
      className=" flex flex-col rounded-lg overflow-hidden
     shadow-lg w-60 h-66 flex-shrink-1 mr-2 ml-2 mb-2 mt-2 
     relative transform transition-transform duration-300 
     ease-in-out hover:scale-105"
    >
      <div
        className="absolute top-4 -right-8 
       p-1 flex flex-col items-center justify-center
        opacity-0 group-hover:opacity-100 transition-all
         duration-300 group-hover:right-10 gap-y-3"
      >
        <button onClick={() => addToCart(product, id)}>
          <div className="flex justify-center items-center hover:text-green-600 w-8 h-8 bg-white drop-shadow-lg">
            <BsBagPlus className="text-1xl" />
          </div>
        </button>
        <Link
          className="w-8 h-8 bg-white flex justify-center hover:text-yellow-300 items-center text-gray-950 drop-shadow-lg"
          href={`/pages/products${id}`}
        >
          <BsEyeFill />
        </Link>
      </div>
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
          <button
            onClick={() => addToCart(product, id)}
            className="bg-gray-500 hover:bg-yellow-500 text-white font-semibold px-4 py-1 rounded-lg inline-flex items-center"
          >
            <TbShoppingCartPlus className="mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
