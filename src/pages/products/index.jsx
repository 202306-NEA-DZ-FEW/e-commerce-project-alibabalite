import React, { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar/Sidebar"
import ProductCard from "@/components/Cards/ProductCard"
import { fetcher } from "@/utils/API"
import Navbar from "@/components/Navbar/Navbar"
import CartSidebar from "@/components/CartSidebar/CartSidebar"
import Link from "next/link"

function ProductsPage({ products, categories }) {
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState([0, 2000])
  const [ratingFilter, setratingFilter] = useState(1)
  const [titleFilter, settitleFilter] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [sidebarwidth, setsidebarwidth] = useState(true)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const handleResize = () => {
    // Automatically open the sidebar on medium and large screens (md and lg)
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }
  const handleSideBarShow = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  let titlepage = "Our Products"
  const filterProducts = () => {
    // Initialize filteredProducts as all products
    let filteredProducts = products.products

    if (categoryFilter !== "all") {
      titlepage = categoryFilter
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categoryFilter,
      )
    }

    if (priceFilter !== "[0,2000]") {
      filteredProducts = filteredProducts.filter((product) => {
        const price = parseFloat(product.price)
        return price >= priceFilter[0] && price <= priceFilter[1]
      })
    }
    if (ratingFilter > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= ratingFilter,
      )
    }

    if (titleFilter.trim() !== "") {
      const lowercaseTitleFilter = titleFilter.trim().toLowerCase()
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(lowercaseTitleFilter),
      )
    }

    return filteredProducts
  }

  const filteredProducts = filterProducts()

  return (
    <div>
      <Navbar
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setratingFilter}
        titleFilter={titleFilter}
        setTitleFilter={settitleFilter}
      />
      <CartSidebar />

      <div className="md:grid-cols-4 gap-4 grid grid-cols-4  ">
        <div
          className={`bg-slate-100 ${
            isSidebarOpen ? "block" : "hidden"
          }  md:mr-3 md:bg-c col-span-1 mr-3 }`}
        >
          <div className={`z-10  md:mr-3 col-span-1 mr-3 `}>
            <Sidebar
              categories={categories}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
              ratingFilter={ratingFilter}
              setRatingFilter={setratingFilter}
              titleFilter={titleFilter}
              setTitleFilter={settitleFilter}
            />
          </div>
        </div>
        <main
          className={` md:col-start-2 md:col-span-3 col-start-1 col-span-3 py-3 ${
            isSidebarOpen ? "col-start-2 col-span-3 " : "col-start-1 col-span-4"
          } `}
        >
          {/* Product cards go here */}
          <div className="mb-6 px-10 text-3xl">
            <div className="flex">
              {titlepage.toUpperCase()}
              <hr />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-4 flex-wrap justify-center">
            {filteredProducts.map((product) => (
              <div className="md:w-1/4 w-full" key={product.id}>
                <ProductCard
                  product={product}
                  id={product.id}
                  key={product.id}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  description={product.description}
                  rating={product.rating}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

// Fetch data on the server side using getServerSideProps
export async function getServerSideProps() {
  try {
    const products = await fetcher("products")
    const categories = await fetcher("products/categories")
    return {
      props: {
        products: products,
        categories: categories,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      props: { products: [] }, // Return an empty array if there's an error
    }
  }
}

export default ProductsPage
