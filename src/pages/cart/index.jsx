import Cartpage from "@/components/CartPage/Cartpage"
import Navbar from "@/components/Navbar/Navbar"
import React, { useContext } from "react"
import ProductCard from "@/components/Productcard/Productcard"
import { CartContext } from "@/contexts/CartProvider"

const Cart = ({ products }) => {
  const { cart } = useContext(CartContext)
  console.log("cartpage", products)
  return (
    <div>
      <Navbar />
      <div className="min-h-[100vh] flex flex-col gap-4 px-[10%] ">
        <div className="mb-5">
          <Cartpage products={products} />
        </div>
        <div class=" px-3">
          <div class="border-b-2  border-gray-300 my-4 "></div>
          <h1 className=" uppercase px-2 text-sm text-gray-800 font-bold">
            SUGGESTED FOR YOU
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row h-full ">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart

export async function getServerSideProps() {
  const BASE_URL = "https://dummyjson.com/products"
  const response = await fetch(`${BASE_URL}?limit=4&skip=0`)
  const data = await response.json()
  const products = data.products
  return {
    props: {
      products,
    },
  }
}
