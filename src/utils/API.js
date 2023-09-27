export async function fetcher(apiRoute) {
  const url = "https://dummyjson.com/products/" + apiRoute

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
///////////////////////
