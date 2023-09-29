import ProductCard from "@/components/Cards/ProductCard"
import FlashCard from "@/components/Cards/FlashCard"
import { fetcher } from "@/utils/API"
import React, { useState } from "react"
import Navbar from "@/components/Navbar/Navbar"

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
    <div>
      <Navbar />

      <main>
        <div className="image-container relative rounded-large w-full h-80 overflow-hidden">
          <div className="bg-overlay absolute top-0 left-0 w-full"></div>
          <img
            src={product.thumbnail}
            alt={product.title}
            // className="w-full h-full rounded-2xl bg-center bg-cover "
          />
          <div className="box d_flex top">
            <div className="side-card">
              <h1>{product.title}</h1>
              <p>{product.discountPercentage} % off</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={previousImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
        <h1 className="text-2xl font-bold text-YellowPotato flex justify-start p-2">
          Products you may like
        </h1>
        <div className="w-full overflow-hidden flex flex-col flex-wrap md:grid grid-cols-2 lg:flex-row lg:flex ">
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

        <h1 className="text-2xl font-bold text-YellowPotato flex justify-start p-2">
          Flash Sale
        </h1>
        <div className="w-full overflow-hidden flex flex-col flex-wrap md:grid grid-cols-2 lg:flex-row lg:flex ">
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

        <h1 className="text-2xl font-bold text-YellowPotato flex justify-start p-2">
          Popular Categories
        </h1>

        <div class="grid grid-cols-3 gap-4 h-full ">
          <div class="col-span-1 w-80">
            <img src="Smartphone.png" alt="Image 1" class="w-full h-auto " />
          </div>
          <div class="grid grid-col-2 col-span-1 w-80 ">
            <img
              src="groceries.png"
              alt="Image 2"
              class="w-full h-auto mb-4 col-span-1 "
            />
            <img
              src="skincare.png"
              alt="Image 3"
              class="w-full h-auto col-span-1"
            />
          </div>
          <div class="col-span-1 w-80 h-96 ">
            <img src="laptop.png" alt="Image 4" class="w-full h-auto mb-4" />
            <img
              src="perfume.png"
              alt="Image 5"
              class="w-full h-auto object-cover object-center"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Homepage

export async function getStaticProps() {
  const response = await fetcher("products")

  return {
    props: {
      products: response,
    },
  }
}
