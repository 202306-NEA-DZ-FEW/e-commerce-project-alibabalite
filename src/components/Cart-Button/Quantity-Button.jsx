import React, { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(0)

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="flex items-center border-solid border-2 rounded-lg border-slate-500 pb-2 pt-2">
      <button
        onClick={decreaseQuantity}
        className="px-4  text-gray-800 items-center"
      >
        <FaMinus />
      </button>
      <span className="mx-4">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="px-4  text-gray-800 items-center"
      >
        <FaPlus />
      </button>
    </div>
  )
}

export default QuantityButton
