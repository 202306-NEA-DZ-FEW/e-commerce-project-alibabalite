import React, { useState, useEffect } from "react"
import Sidebar from "@/components/Sidebar/Sidebar"
import ProductCard from "@/components/Productcard/Productcard"
import { fetcher } from "@/utils/API"

function ProductsPage({ products, categories }) {
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState([0, 2000])
  const [ratingFilter, setratingFilter] = useState(1)
  const [titleFilter, settitleFilter] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
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
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  const filterProducts = () => {
    // Initialize filteredProducts as all products
    let filteredProducts = products.products

    if (categoryFilter !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categoryFilter,
      )
    }

    if (priceFilter !== "[0,100]") {
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
    <div className="grid md:grid-cols-4">
      <div
        className={`md:col-span-1 ${
          isSidebarOpen ? "block" : "hidden"
        } sm:block`}
      >
        <Sidebar
          className={`w-1/2`}
          categories={categories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          ratingFilter={ratingFilter}
          setratingFilter={setratingFilter}
          titleFilter={titleFilter}
          settitleFilter={settitleFilter}
        />
      </div>
      <main className="flex flex-wrap ">
        {/* Product cards go here */}
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.thumbnail}
            title={product.title}
            description={product.description}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </main>
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
