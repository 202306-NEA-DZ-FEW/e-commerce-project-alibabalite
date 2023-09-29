import React, { useContext } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { RiDeleteBinFill } from "react-icons/ri"
import { SideBarContext } from "@/contexts/SideBarProvider"
import { CartContext } from "@/contexts/CartProvider"
import CartItems from "../CartItems/CartItems"
import Link from "next/link"

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext)
  const { cart, clearCart, total, itemAmount } = useContext(CartContext)
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } max-w-[65vh] w-full bg-white fixed top-0 
        h-full shadow-2xl md:w-[35vw] transition-all duration-300
        z-20 px-1 lg:[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase px-2 text-sm font-semibold">
          ShoppingBag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-6 h-6 flex justify-center"
        >
          <BsArrowRightShort className="text-2xl" />
        </div>
      </div>
      <div
        className="flex flex-col gap-y-2 h-[65%]  overflow-y-auto 
            overflow-x-hidden"
      >
        {cart.map((item) => {
          return <CartItems item={item} key={item.id} />
        })}
      </div>
      <div>
        <div className=" relative flex w-full border rounded-sm bg-gray-100 border-gray-200  justify-between items-center mb-0">
          <div className="uppercase font-semibold ">
            <span className=" mx-2 ">Total : </span>
            {parseFloat(total).toFixed(2)} DA
          </div>

          <div
            onClick={clearCart}
            className="cursor-pointer  text-white bg-gray-700 hover:bg-red-500 h-[40px] w-8 flex justify-center items-center border rounded-sm"
          >
            <RiDeleteBinFill />
          </div>
        </div>
        <Link
          className="hover:bg-yellow-400 bg-gray-300 flex p-2 justify-center items-center
                text-gray-700 font-medium transition-all duration-150"
          href="/pages/cart"
        >
          View Cart
        </Link>
        <Link
          className="hover:bg-green-400 bg-gray-300 flex p-2 justify-center items-center
                text-gray-700 my-1 font-medium transition-all duration-300"
          href="/pages/checkout"
        >
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
