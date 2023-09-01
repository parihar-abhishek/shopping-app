// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();
    resolve({ data });
  });
}



export function fetchProductsByFilters(filter) {
// doubt
let queryString = '';
for(let key in filter){

  queryString += `${key}=${filter[key]}&`
}

// doubt


  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3004/products"+queryString);
    const data = await response.json();
    resolve({ data });
  });
}
