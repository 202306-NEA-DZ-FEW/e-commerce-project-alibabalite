import React, { useState } from "react"

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
    <div className="flex items-center border-solid border-2 border-slate-500">
      <button onClick={decreaseQuantity} className="px-4 py-1 text-gray-800">
        -
      </button>
      <span className="mx-4">{quantity}</span>
      <button onClick={increaseQuantity} className="px-4 py-1 text-gray-800">
        +
      </button>
    </div>
  )
}

export default QuantityButton
