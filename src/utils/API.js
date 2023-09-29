export async function fetcher(apiRoute) {
  const url = "https://fakestoreapi.com/" + apiRoute

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
export async function fetcher2(apiRoute) {
  const url = "https://dummyjson.com/" + apiRoute

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
