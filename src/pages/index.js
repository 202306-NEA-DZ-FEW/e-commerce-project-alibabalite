import ProductCard from "@/components/Cards/ProductCard"
import FlashCard from "@/components/Cards/FlashCard"
import { fetcher } from "@/utils/API"
import React from "react"
import Navbar from "@/components/Navbar/Navbar"
import Carousel from "@/components/Carousel"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react"

const Homepage = ({ products, categories }) => {
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState([0, 2000])
  const [ratingFilter, setratingFilter] = useState(1)
  const [titleFilter, settitleFilter] = useState("")

  const slicedProducts = products.products.slice(0, 5)

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

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
      <main className="bg-gray-100">
        <div className="grid grid-cols-3 gap-4 pt-6 lg:pt-0">
          <div className="col-span-3">
            <Slider {...settings}>
              {products.products.map((product, index) => (
                <Carousel
                  id={product.id}
                  key={product.id}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </Slider>
          </div>
        </div>

        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-gray-600 p-2 mt-6 mb-6">
            Flash Sale
          </h1>
          <hr className="my-4 mx-2 border-t border-gray-400 flex-grow" />
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {slicedProducts
            .filter((product) => product.discountPercentage > 10)
            .map((product, index) => (
              <div key={index}>
                <FlashCard
                  id={product.id}
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

        <div className="grid grid-cols-1 gap-4 ml-6 mr-6 md:grid-cols-2 lg:grid-cols-3">
          {/* First Column */}
          <div className="col-span-1 grid-col-1 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="col-span-1 bg-blue-200 rounded-lg">
              <img
                src="Smartphone.png"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className=" grid grid-col-2 col-span-1 gap-4">
            <div className="col-span-1 bg-green-200 mb-2 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="groceries.png"
                alt="Image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 bg-green-200 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="perfume.png"
                alt="Image 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="grid grid-col-1 col-span-1 gap-4">
            <div className="col-span-1 h-full rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="skincare.png"
                alt="Image 3"
                className="w-full h-full object-center object-cover rounded-lg"
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
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {slicedProducts.map((product, index) => (
            <div key={index}>
              <ProductCard
                id={product.id}
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
    </div>
  )
}

export default Homepage

export async function getStaticProps() {
  const response = await fetcher("products")
  const categories = await fetcher("products/categories")

  return {
    props: {
      products: response,
      categories: categories,
    },
  }
}
