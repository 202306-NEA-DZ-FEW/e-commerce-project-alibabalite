import React, { createContext, useState, useEffect } from "react"
export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([])
  console.log("datadata", productsList)
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setProductsList(data)
    }
    fetchProduct()
  }, [])
  return (
    <ProductContext.Provider value={{ productsList }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider

// export async function getStaticProps() {
//     const data = await fetcher2("products")

//     return {
//         props: {
//             products: data,
//         },
//     }
// }
