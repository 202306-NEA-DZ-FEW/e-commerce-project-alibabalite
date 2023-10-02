import Navbar from "@/components/Navbar/Navbar"
import { Html, Head, Main, NextScript } from "next/document"
import CartSidebar from "@/components/CartSidebar/CartSidebar"

export default function Document() {
  return (
    <Html className="bg-slate-100" lang="en">
      <Head />
      <body className="bg-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
