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
    <div className="md:grid md:grid-cols-4 md:mt-10 md:ml-3 mr-3s grid grid-cols-4 mt-10 ml-3 mr-3s">
      <div
        className={`md:col-span-1 md:ml-3 md:mr-3 md:bg-c col-span-1 ml-3 mr-3 bg-cyan-100 ${
          isSidebarOpen ? "fixed" : "hidden"
        } sm:block`}
      >
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
      <main className="md:col-start-2 md:col-span-3 col-start-2 col-span-3">
        {/* Product cards go here */}
        <div className="mb-6 px-10 text-3xl">Our Products</div>
        <div className="flex flex-wrap">
          {filteredProducts.map((product) => (
            <ProductCard
              className={`w-1/4 px-2 mt-2 mb-10`}
              key={product.id}
              imageSrc={product.thumbnail}
              title={product.title}
              description={product.description}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </div>
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
