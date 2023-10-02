import React, { useContext } from "react"
import Link from "next/link"
import { AiFillCloseSquare } from "react-icons/ai"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { AiOutlineMinusSquare } from "react-icons/ai"
import { CartContext } from "@/contexts/CartProvider"

const CartItems = ({ item }) => {
  const { deleteFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext)

  const { id, title, thumbnail, price, amount } = item
  return (
    <div className="flex gap-x-3 py-2 lg:px-4 border-b border-gray-300 w-full font-light">
      <div className="w-full min-h-[100px] flex items-center gap-x-2">
        <Link href={`/product${id}`}>
          <img className="max-w-[60px]" src={thumbnail} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between">
            <Link
              className="text-[12px] uppercase font-medium max-w-[190px] text-gray-600 hover:underline "
              href={`/products${id}`}
            >
              {title}
            </Link>
            <div
              onClick={() => deleteFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <AiFillCloseSquare className="text-gray-700  hover:text-red-500 transition " />
            </div>
          </div>
          <div className="flex gap-x-2 h-[28px] text-sm">
            <div
              className=" flex flex-1 max-w-[90px] items-center h-full text-gray-600 
                          font-medium "
            >
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <AiOutlineMinusSquare className="hover:text-red-600 text-lg" />
              </div>
              <div className="h-full flex justify-center items-center px-1">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <AiOutlinePlusSquare className="hover:text-green-600 text-lg" />
              </div>
            </div>
            <div className="flex flex-1 justify-around items-center text-sm text-gray-800 font-normal">
              {price} $
            </div>
            <div className="flex flex-1 justify-end items-center text-gray-600 font-medium">
              {`${parseFloat(price * amount).toFixed(2)}`} DA
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
