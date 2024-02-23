const axios = {
  get: (endpoint) => {
    if (endpoint === 'https://fakestoreapi.com/products/1') {
      return new Promise((res) =>
        res({
          data: {
            id: 1,
            category: "men's clothing"
          }
        })
      )
    }

    if (endpoint === 'https://fakestoreapi.com/products/80') {
      return new Promise((res) =>
        res({
          data: {
            id: 79,
            category: "men's clothing"
          }
        })
      )
    }

    if (endpoint === 'https://fakestoreapi.com/products/90') {
      return new Promise((res) =>
        res({
          data: {
            id: 89,
            category: "women's clothing"
          }
        })
      )
    }

    if (endpoint === 'https://fakestoreapi.com/products/100') {
      return new Promise((res) =>
        res({
          data: {
            id: 99,
            category: "kid's clothing"
          }
        })
      )
    }

    return Promise.reject(new Error('Endpoint is not valid'))
  }
}
export default axios
