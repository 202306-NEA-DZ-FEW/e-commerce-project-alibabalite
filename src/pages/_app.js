import CartProvider from "@/contexts/CartProvider"
import ProductProvider from "@/contexts/ProductProvider"
import SideBarProvider from "@/contexts/SideBarProvider"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <SideBarProvider>
      <CartProvider>
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </CartProvider>
    </SideBarProvider>
  )
}
