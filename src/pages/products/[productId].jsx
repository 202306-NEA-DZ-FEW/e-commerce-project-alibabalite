import QuantityButton from "@/components/Cart-Button/Quantity-Button"
import Image from "next/image"
import Link from "next/link"

export default function singleProduct() {
  return (
    <>
      <div className="first-section w-full grid grid-cols-2 gap-10 pl-20 pr-20">
        <div className="product-pictures col-span-1 grid grid-cols-3 gap-4">
          <div className="col-span-3" style={{ height: "500px" }}>
            <img
              src="https://images.unsplash.com/photo-1695220539847-31f3a2453bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              alt=""
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1" style={{ height: "150px" }}>
            <img
              src="https://images.unsplash.com/photo-1695220539847-31f3a2453bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              alt=""
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1" style={{ height: "150px" }}>
            <img
              src="https://images.unsplash.com/photo-1695220539847-31f3a2453bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              alt=""
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 " style={{ height: "150px" }}>
            <img
              src="https://images.unsplash.com/photo-1695220539847-31f3a2453bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              alt=""
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div
          className="product-details grid grid-rows-2 gap-4"
          style={{ height: "400px" }}
        >
          <div className="grid-cols-4 leading-10">
            <h1 className="col-span-4 text-4xl">Brand title</h1>
            <div className="col-span-1 flex justify-start gap-2">
              <p>Star 4.8</p>
              <p>1.2k reviews</p>
              <p> Sold +800</p>
            </div>
            <div className="col-span-1 flex justify-between">
              <p>Price: 80$ Discount</p>
              <p>
                <strong>Shipping</strong> calculated at checkout
              </p>
            </div>
            <div className="col-span-4 flex justify-start gap-4 mt-2">
              <QuantityButton />
              <p>Stock: </p>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <h1 className="text-3xl col-span-6">Product Details</h1>
            <p className="col-span-6">Description</p>
            <p className="col-span-6">Brand</p>
            <p className="col-span-6">Category</p>
            <p className="col-span-6">Stock</p>
            <button className="btn btn-primary col-span-6 justify-center">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
