const productContainer = document.querySelector("#product-container")
const cartList = document.querySelector("#cart-list")

const products = []

productContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const product = e.target.closest(".p-4").querySelector("img").src
    const productSuffix = product.slice(product.length - 3)

    products.push(productSuffix)
    console.log(products)
    addToCart(products)
  }
})

function addToCart(products) {
  const red = products.filter((product) => product === "F00")

  red.forEach((redProduct) => {})
}
