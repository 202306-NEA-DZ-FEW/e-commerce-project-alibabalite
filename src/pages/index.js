import Image from "next/image"
import { fetcher, fetcher2 } from "@/utils/API"

export default function Home({ products }) {
  console.log(products)
  return <main>E_commerce</main>
}

export async function getStaticProps() {
  const response = await fetcher2("products")

  return {
    props: {
      products: response,
    },
  }
}
