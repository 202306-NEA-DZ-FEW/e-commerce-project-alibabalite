import { SideBarContext } from "@/contexts/SideBarProvider"
import React, { useContext, useEffect, useState } from "react"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { CartContext } from "@/contexts/CartProvider"
import Link from "next/link"
import { PiCoatHanger } from "react-icons/pi"

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SideBarContext)
  const { itemAmount } = useContext(CartContext)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header
      className={`pt-2 ${isActive ? "bg-pink-200" : "bg-gray-400"} fixed w-full 
        z-10 transition-all`}
    >
      <div className=" flex  items-center justify-between h-full">
        <Link href={`/product`}>
          <div>
            <PiCoatHanger className="text-3xl " />
          </div>
        </Link>
        <div
          className="cursor-pointer  flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiOutlineShoppingBag className="text-2xl" />
          <div
            className="bg-red-500 absolute right-3 -bottom-1
                 text-[10px] w-[16px] h-[16px] text-white rounded-full flex justify-center 
                 items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
