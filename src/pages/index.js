import Image from "next/image"
import { fetcher, fetcher2 } from "@/utils/API"
import Navbar from "@/components/Navbar/Navbar"

export default function Home({ products }) {
  console.log(products)
  return (
    <main>
      <Navbar />
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetcher("products")

  return {
    props: {
      products: response,
    },
  }
}
