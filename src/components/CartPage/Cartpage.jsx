import React, { useContext } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { RiDeleteBinFill } from "react-icons/ri"
import { SideBarContext } from "@/contexts/SideBarProvider"
import { CartContext } from "@/contexts/CartProvider"
import CartItems from "../CartItems/CartItems"
import Link from "next/link"

const Cartpage = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext)
  console.log("carte page ", cart)
  const Tax = 1.99
  const Shipping = 20.66

  return (
    <div className="relative w-full flex flex-col h-full gap-4 lg:flex-row">
      <div className="lg:w-2/3 px-2 py-3 rounded-sm shadow-md bg-white lg:px-2">
        <h1 className="uppercase px-2 text-sm text-gray-800 font-bold">
          ShoppingBag ({itemAmount})
        </h1>
        {cart.map((item) => (
          <CartItems item={item} key={item.id} />
        ))}
        {cart.length === 0 ? (
          ""
        ) : (
          <div
            onClick={clearCart}
            className="cursor-pointer  text-white bg-gray-700 hover:bg-red-500 h-[40px] w-[100%] flex justify-center items-center border rounded-sm"
          >
            <RiDeleteBinFill />
          </div>
        )}
      </div>
      <div className="lg:w-1/3 px-2 sticky top-8 py-3 flex-col rounded-sm shadow-md bg-white h-full gap-y-10 ">
        <h1 className="uppercase text-sm text-gray-800 font-bold">
          Shopping summary
        </h1>
        <div className="flex justify-between items-center text-sm text-gray-800 ">
          <h2>Subtotal</h2>
          <span>{parseFloat(total).toFixed(2)} $</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-800 ">
          <h2>Tax / item</h2>
          <span>{Tax}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-800 ">
          <h2>Total Tax</h2>
          <span>{parseFloat(itemAmount * Tax).toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-800 ">
          <h2>Shipping / Km</h2>
          <span>{Shipping}</span>
        </div>
        <br></br>
        <div className="flex justify-between items-center uppercase text-sm text-gray-800 font-bold">
          <h2>Total</h2>
          <span className="">
            {total === 0
              ? parseFloat(total).toFixed(2)
              : parseFloat(total + (Tax + Shipping)).toFixed(2)}
            $
          </span>
        </div>
        <button
          className="hover:bg-green-400 w-full rounded-sm bg-purple-800 flex p-2 justify-center items-center
        text-white my-1 font-medium transition-all duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default Cartpage
