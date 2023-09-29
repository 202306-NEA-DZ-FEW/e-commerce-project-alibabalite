import Image from "next/image"
import { useContext } from "react"
import { fetcher, fetcher2 } from "@/utils/API"
import { ProductContext } from "@/contexts/ProductProvider"
import Product from "@/components/Product/Product"
import Header from "@/components/Header/Header"
import Sidebar from "@/components/CartSidebar/Sidebar"

export default function Home() {
  const { productsList } = useContext(ProductContext)
  const filterProducts = productsList.filter((item) => {
    return item.category === "men's clothing" || "women's clothing"
  })
  return (
    <div>
      <Header />
      <Sidebar />
      <section className="px-16">
        <div className="conatiner mx-5">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        xl:grid-cols-5 gap-6 max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filterProducts.map((product) => {
              return <Product product={product} key={product.id} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
