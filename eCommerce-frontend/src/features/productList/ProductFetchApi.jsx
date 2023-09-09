export function fetchProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter) {

  let key = '';
  for(let string in filter){
    key += `${string}=${filter[string]}&`
  }
 
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?'+key);
    const data = await response.json();
    resolve({ data });
  });
}
