import { useState } from "react"
import { fetcher } from "@/utils/API"
import { FaStar, FaCartPlus, MdProductionQuantityLimits } from "react-icons/fa"
import { useRouter } from "next/router"
import ProgressCard from "@/components/Cards/ProgressCard"

export default function singleProductPage({ productData }) {
  /* eslint-disable react-hooks/rules-of-hooks */
  const { productId } = useRouter().query
  const [selectedImage, setSelectedImage] = useState(
    `https://i.dummyjson.com/data/products/${productId}/thumbnail.jpg`,
  )

  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc)
  }

  // UseState to handle Images
  return (
    <main className="h-full w-full">
      {/* Product Details Section */}
      <div className="first-section w-full grid grid-cols-2 gap-10 pl-20 pr-20">
        <div className="product-pictures col-span-2 md:col-span-2 lg:col-span-1 grid grid-cols-3 gap-4">
          <div
            className="col-span-3 justify-center border-solid border-2 border-slate-200 rounded-lg transition-transform transform hover:scale-105"
            style={{ height: "500px" }}
          >
            <img
              src={selectedImage}
              srcSet={`
              https://i.dummyjson.com/data/products/${productId}/thumbnail.webp
              https://i.dummyjson.com/data/products/${productId}/thumbnail.png
            `}
              alt=""
              className="object-cover object-center w-full h-full rounded-lg cursor-pointer"
            />
          </div>
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="col-span-1 border-solid border-2 border-slate-200 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
              style={{ height: "130px" }}
              onClick={() =>
                handleThumbnailClick(
                  `https://i.dummyjson.com/data/products/${productId}/${index}.jpg`,
                )
              }
            >
              <img
                src={`https://i.dummyjson.com/data/products/${productId}/${index}.jpg`}
                alt=""
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="details-section bg-slate-50 p-4 rounded-lg col-span-2 md:col-span-2 lg:col-span-1 grid grid-cols-3 items-center">
          <div className="product-title col-span-3 grid-cols-4">
            <h1 className="col-span-4 text-center md:text-center lg:text-start text-3xl font-bold w-full mb-4">
              {productData.title}
            </h1>
            <p className="col-span-4 flex justify-center md:justify-center lg:justify-start gap-2 items-center text-center md:text-center lg:text-start mb-4">
              <span className="text-yellow-400 text-center md:text-center lg:text-start">
                <FaStar />
              </span>{" "}
              <strong>{productData.rating}</strong> (1,2k reviews) &#183; Sold
              700+
            </p>
            <p className="col-span-4 text-center md:text-center lg:text-start mb-4">
              <span className="font-bold text-2xl">${productData.price}</span>{" "}
              &#183;{" "}
              <span className="line-through badge bg-red-500 text-white font-bold">
                {productData.discountPercentage}%
              </span>{" "}
              Off
            </p>
            <p className="col-span-4 text-center md:text-center lg:text-start items-center mb-4 border-solid border-b-2 border-b-gray-500 pb-4">
              <span className="font-bold text-indigo-900">Shipping</span> of{" "}
              <strong>{productData.title}</strong> from Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sapiente distinctio quia sunt
              quae! Omnis natus esse id debitis dicta reiciendis, dolor, quos
              temporibus is <strong>calculated at checkout</strong>
            </p>
          </div>
          <div className="product-details col-span-3 grid grid-cols-5">
            <h1 className="col-span-5 text-center md:text-center lg:text-start font-bold text-2xl mb-2">
              Product Details
            </h1>
            <p className="col-span-5 text-center md:text-center lg:text-start mb-2">
              <strong>Description :</strong> {productData.description}{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                hic magnam natus nam doloremque culpa fugiat libero eaque ex
                accusamus.
              </span>
            </p>
            <p className="col-span-5 text-center md:text-center lg:text-start mb-2">
              <strong>Category :</strong> {productData.category}
            </p>
            <p className="col-span-5 text-center md:text-center lg:text-start mb-2">
              <strong>Brand :</strong> {productData.brand}
            </p>
            <p className="col-span-5 text-center md:text-center lg:text-start mb-2 border-solid border-b-2 border-b-gray-500 pb-4">
              <strong>Stock :</strong>{" "}
              <span className="font-bold text-red-500">
                {productData.stock}
              </span>{" "}
              left
            </p>
          </div>
          <div className="cart-section col-span-3 mt-4">
            <button className="btn btn-primary hover:bg-cyan-700 hover:text-white rounded-lg w-full">
              Add to Cart <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
      {/* Product Details Ends Here */}
      {/* Second Section Starts Here */}
      <div className="second-section w-full h-full mt-24 pl-20 pr-20">
        <h1 className="text-3xl font-bold text-center md:text-center lg:text-start border-b-gray-300 pb-4 border-solid border-b-2 lg:w-full mr-auto">
          Reviews
        </h1>
        <div className="reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 border-b-gray-300 border-solid border-b-2 mb-20 pb-4">
          <div className="review-progress col-span-1 grid grid-cols-4">
            <h2 className="col-span-4 text-center md:text-center lg:text-start mb-2 font-bold">
              Rating Snippet
            </h2>
            <div className="progress-bars col-span-4">
              <ProgressCard />
            </div>
          </div>
          <div className="overall-rating col-span-1 grid grid-cols-2">
            <h1 className="col-span-2 text-center md:text-center lg:text-end font-bold">
              Overall Rating
            </h1>
            <p className="col-span-2 flex justify-end items-center self-start gap-2">
              <span className="text-5xl font-bold">{productData.rating}</span>{" "}
              <span className="text-yellow-500">
                <FaStar />
              </span>{" "}
              (1345 reviews)
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  const { productId } = context.query

  try {
    // Fetch data for the specified productId
    const data = await fetcher(`products/${productId}`)

    // fetched data as props
    return {
      props: {
        productData: data,
      },
    }
  } catch (error) {
    // Handle any errors that occur during fetching
    console.error("Error fetching product data:", error)

    // Return an empty object or handle the error differently
    return {
      props: {},
    }
  }
}
