export async function fetcher(apiRoute) {
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

// export async function fetcher(apiRoute) {
//   const url = "https://dummyjson.com/" + apiRoute

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//     },
//   }
//   const response = await fetch(url, options)
//   const data = await response.json()
//   return data
// }

// export async function fetcher(apiRoute) {
//   const url = "https://dummyjson.com/" + apiRoute;

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data.products; // Assuming that 'products' is an array in your response
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return []; // Return an empty array in case of an error
//   }
// }
