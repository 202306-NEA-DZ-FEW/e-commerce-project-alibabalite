import React, { useContext } from "react"
import Link from "next/link"
import { BsBagPlus, BsEyeFill } from "react-icons/bs"
import Image from "next/image"
import { CartContext } from "@/contexts/CartProvider"

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  // console.log(product)
  const { id, image, category, title, price } = product
  return (
    <div className="my-8">
      <div
        className="border border-[#eee] h-[300px] mb-4
             relative overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/* {image} */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] w-auto group-hover:scale-110 
                        transition duration-300 "
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="absolute top-4 -right-8  p-1 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-5 gap-y-3">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center hover:text-green-600 w-8 h-8 bg-white drop-shadow-lg">
              <BsBagPlus className="text-1xl" />
            </div>
          </button>
          <Link
            className="w-8 h-8 bg-white flex justify-center hover:text-yellow-300 items-center text-gray-950 drop-shadow-lg"
            href={`/product${id}`}
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div className=" text-sm capitalize text-gray-500">{category}</div>
        <Link href={`/product${id}`}>
          <h2 className="font-semibold mb-1 text-lg">{title}</h2>
        </Link>
        <div className="font-semibold ">{price} DA</div>
      </div>
    </div>
  )
}

export default Product
