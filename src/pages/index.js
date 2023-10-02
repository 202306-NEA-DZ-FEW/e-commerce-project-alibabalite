import Image from "next/image"
import { useContext } from "react"
import { fetcher, fetcher2 } from "@/utils/API"
import Navbar from "@/components/Navbar/Navbar"
import CartSidebar from "../components/CartSidebar/CartSidebar"

export default function Home({ products }) {
  console.log(products)
  return (
    <main>
      <Navbar />
      <CartSidebar />
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetcher("products")

  return {
    props: {
      products: response,
    },
  }
}
