import ProductCard from "@/components/Cards/ProductCard"
import FlashCard from "@/components/Cards/FlashCard"
import { fetcher } from "@/utils/API"
import { GrNext, GrPrevious } from "react-icons/gr"
import React, { useState } from "react"

const Homepage = ({ products }) => {
  console.log(products.products)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % products.products.length,
    )
  }
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? products.products.length - 1 : prevIndex - 1,
    )
  }
  const product = products.products[currentImageIndex]
  const slicedProducts = products.products.slice(0, 5)

  return (
    <main className="bg-gray-100">
      <div className="relative">
        {/* Container for the image and buttons */}
        <div className="relative h-80 overflow-hidden">
          <div className="bg-overlay absolute top-0 left-0 w-full h-full"></div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full rounded-xl bg-center bg-cover"
          />
          <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2">
            <button
              className="mt-4 rounded-full bg-gray-300 text-white px-2 py-2 ml-4"
              onClick={previousImage}
            >
              {" "}
              <GrPrevious />
            </button>
            <button
              className="mt-4 rounded-full bg-gray-300 text-white px-2 py-2 mr-4"
              onClick={nextImage}
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-600 p-2 mt-6 mb-6">
          Flash Sale
        </h1>
        <hr className="my-4 mx-2 border-t border-gray-400 flex-grow" />
      </div>
      <div className="w-full overflow-hidden flex flex-col flex-wrap md:grid grid-cols-2 lg:flex-row lg:flex ">
        {/* <div className="grid grid-cols-5 "> */}
        {slicedProducts
          .filter((product) => product.discountPercentage > 10)
          .map((product, index) => (
            <div key={index}>
              <FlashCard
                key={index}
                thumbnail={product.thumbnail}
                title={product.title}
                price={product.price}
                discountPercentage={product.discountPercentage}
              />
            </div>
          ))}
      </div>

      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-600 p-2 mt-6 mb-6">
          Popular Categories
        </h1>
        <hr className="my-4 mx-2 border-t border-gray-400 flex-grow" />
      </div>
      <div className="grid grid-cols-3 gap-4 ml-6 mr-6 md:grid-cols-3 grid-cols-1 lg:grid-cols-3">
        {/* First Column */}
        <div className="col-span-1 h-80 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="h-full bg-blue-200 h-80">
            <img
              src="Smartphone.png"
              alt="Image 1"
              className="w-full h-full mb-1"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1 h-80">
          <div className="h-1/2 bg-green-200 mb-2 h-40 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src="groceries.png"
              alt="Image 2"
              className="w-full h-full mb-1"
            />
          </div>
          <div className="h-1/2 bg-green-200 h-40 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src="perfume.png"
              alt="Image 5"
              className="w-full h-full mb-1"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="col-span-1 h-80">
          <div className="h-1/2 bg-yellow-200 mb-2 h-40 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src="laptop.png"
              alt="Image 4"
              className="w-full h-full mb-1"
            />
          </div>
          <div className="h-1/2 bg-yellow-200 h-40 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src="skincare.png"
              alt="Image 3"
              className="w-full h-full mb-1"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-600 p-2 mt-6 mb-6">
          Products you may like
        </h1>
        <hr className="my-4 mx-2 border-t border-gray-400 flex-grow" />
      </div>
      <hr className="text-black" />
      <div className="w-full overflow-hidden flex flex-col flex-wrap md:grid grid-cols-2 lg:flex-row lg:flex ">
        {/* <div className= "grid grid-cols-5 "> */}
        {slicedProducts.map((product, index) => (
          <div key={index}>
            <ProductCard
              key={index}
              thumbnail={product.thumbnail}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Homepage

export async function getServerSideProps() {
  const response = await fetcher("products")
  return {
    props: {
      products: response,
    },
  }
}
