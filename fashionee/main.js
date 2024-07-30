const products = [
  {
    "id": 1,
    "name": "Textured turtleneck with zip",
    "price": 52.99,
    "oldPrice": 53.99,
    "isSale": true,
    "isNew": false,
    "categories": [
      "Men"
    ],
    "color": "Blue",
    "image": "https://static.insales-cdn.com/images/products/1/3774/489508542/futbolka-begovaya-muzhskaya-craft-prime-run-blue-1.jpg"
  },
  {
    "id": 2,
    "name": "Classic V-neck Sweater",
    "price": 45.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men"
    ],
    "color": "Black",
    "image": "https://www.professionalsport.ru/spree/products/000/076/863/original/929147_011.jpg?1520320242"
  },
  {
    "id": 3,
    "name": "Crew Neck Sweatshirt",
    "price": 39.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men",
      "New Arrivals"
    ],
    "color": "Grey",
    "image": "https://llsr.ru/i/product/KK-38011962XL.jpg"
  },
  {
    "id": 4,
    "name": "Striped Polo Shirt",
    "price": 29.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women"
    ],
    "color": "Green",
    "image": "https://www.adverti.ru/media/catalog/product/3/1/3101268_a.jpg"
  },
  {
    "id": 5,
    "name": "Slim Fit Dress Shirt",
    "price": 59.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women"
    ],
    "color": "White",
    "image": "https://i5.walmartimages.ca/images/Enlarge/024/452/6000198024452.jpg"
  },
  {
    "id": 6,
    "name": "Hooded Zip-Up Jacket",
    "price": 69.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men",
      "Accessories",
      "New Arrivals"
    ],
    "color": "Black",
    "image": "https://www.professionalsport.ru/spree/products/000/076/863/original/929147_011.jpg?1520320242"
  },
  {
    "id": 7,
    "name": "Cargo Shorts",
    "price": 34.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women",
      "New Arrivals"
    ],
    "color": "White",
    "image": "https://ae01.alicdn.com/kf/HTB1p9jTJXuWBuNjSszbq6AS7FXaC.jpg"
  },
  {
    "id": 8,
    "name": "Leather Belt",
    "price": 19.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men",
      "Accessories"
    ],
    "color": "Brown",
    "image": "https://ae01.alicdn.com/kf/HTB1FTSUM7voK1RjSZFwq6AiCFXaL.jpg"
  },
  {
    "id": 9,
    "name": "Casual Sneakers",
    "price": 49.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Women",
      "New Arrivals"
    ],
    "color": "Blue",
    "image": "https://static.tildacdn.com/tild3034-3237-4865-b765-653833343931/LRM_EXPORT_460369695.jpeg"
  },
  {
    "id": 10,
    "name": "Denim Jeans",
    "price": 55.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men",
      "Women",
      "Accessories",
      "New Arrivals"
    ],
    "color": "Blue",
    "image": "https://img.alicdn.com/imgextra/i2/TB1i2HaOFXXXXcPXpXXXXXXXXXX_!!0-item_pic.jpg"
  },
  {
    "id": 11,
    "name": "Denim Jeans",
    "price": 55.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men",
      "Women",
      "Accessories",
      "New Arrivals"
    ],
    "color": "Blue",
    "image": "https://img.alicdn.com/imgextra/i2/TB1i2HaOFXXXXcPXpXXXXXXXXXX_!!0-item_pic.jpg"
  },
  {
    "id": 12,
    "name": "Denim Jeans",
    "price": 55.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men",
      "Women",
      "Accessories",
      "New Arrivals"
    ],
    "color": "Blue",
    "image": "https://img.alicdn.com/imgextra/i2/TB1i2HaOFXXXXcPXpXXXXXXXXXX_!!0-item_pic.jpg"
  },
  {
    "id": 13,
    "name": "Denim Jeans",
    "price": 55.99,
    "oldPrice": 0,
    "isSale": false,
    "isNew": true,
    "categories": [
      "Men",
      "Women",
      "Accessories",
      "New Arrivals"
    ],
    "color": "Blue",
    "image": "https://img.alicdn.com/imgextra/i2/TB1i2HaOFXXXXcPXpXXXXXXXXXX_!!0-item_pic.jpg"
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const productsCount = products.length;
  createProductList(products, productsCount);
  updateProductsCount(productsCount)
  updateBasketInHeader()
  updateFavoritesInHeader()
});

const PRODUCT_TO_BASKET_KEY = 'product-in-basket'
const PRODUCT_TO_FAVORITES_KEY = 'product-in-favorites'
let searchValue = ''
let sort = ''
let oldFilter = {
  category: 'All',
  price: {
    min: 0,
    max: 999999
  },
  colors: []
}

const currentFilter = {
  category: 'All',
  price: {
    min: 0,
    max: 999999
  },
  colors: []
}

const paginationInfo = {
  activePage: 0,
  perPage: 12,
  pages: 0
}

const debounce = (f, t) => {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}

const getFromLS = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log(e)
  }
}

const setToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}

const createProduct = (product) => {
  const productWrapper = document.createElement("div")
  productWrapper.classList.add("product")

  const photo = document.createElement("div")
  photo.classList.add("photo")

  const topBar = document.createElement("div")
  topBar.classList.add("top-bar")

  const labels = document.createElement("div")
  labels.classList.add("labels")

  if (product.isSale) {
    const label = document.createElement("div")
    label.classList.add("label")

    label.classList.add("sale")
    label.innerHTML = 'Sale'

    labels.appendChild(label)
  }

  if (product.isNew) {
    const label = document.createElement("div")
    label.classList.add("label")

    label.classList.add("new")
    label.innerHTML = 'New'

    labels.appendChild(label)
  }

  const favorites = document.createElement("div")
  favorites.classList.add("favorites")

  const favoriteIcon = document.createElement("img")
  favoriteIcon.classList.add("favorite-icon")
  favoriteIcon.src = './icons/heart.svg'
  favoriteIcon.alt = 'Favorite Icon'

  favoriteIcon.addEventListener('click', () => {
    if (favoriteIcon.src.includes('red')) {
      favoriteIcon.src = './icons/heart.svg'
    } else {
      favoriteIcon.src = './icons/heart-red.svg'
    }
    favoriteProduct(product)
  })

  favorites.appendChild(favoriteIcon)
  topBar.appendChild(labels)
  topBar.appendChild(favorites)

  const productImage = document.createElement("img")
  productImage.src = product.image
  productImage.classList.add('product-image')

  photo.appendChild(topBar)
  photo.appendChild(productImage)

  const info = document.createElement("div")
  info.classList.add("info")

  const name = document.createElement("div")
  name.classList.add("name")
  name.innerHTML = product.name

  const price = document.createElement("div")
  price.classList.add("price")

  const currentPrice = document.createElement("div")
  currentPrice.classList.add("current-price")
  currentPrice.innerHTML = `$${product.price}`

  price.appendChild(currentPrice)

  if (product.oldPrice) {
    const oldPrice = document.createElement("div")
    oldPrice.classList.add("old-price")
    oldPrice.innerHTML = `$${product.oldPrice}`

    price.appendChild(oldPrice)
  }

  info.appendChild(name)
  info.appendChild(price)

  const buyButton = document.createElement("button")
  buyButton.classList.add("button-cart")

  const buttonCart = document.createElement("img")
  buttonCart.classList.add("button-cart")
  buttonCart.src = './icons/cart.svg'
  buttonCart.alt = 'Button Cart'

  buyButton.addEventListener('click', (event) => {
    if (buttonCart.src.includes('red')) {
      buttonCart.src = './icons/cart.svg'
      removeProduct(product);
    } else {
      buttonCart.src = './icons/cart-red.svg'
    }
    buyProduct(product)
  })

  buyButton.appendChild(buttonCart)

  productWrapper.appendChild(photo)
  productWrapper.appendChild(info)
  productWrapper.appendChild(buyButton)

  return productWrapper
}

const removeProduct = (product) => {
  const index = cart.findIndex(item => item.id === product.id)
  if (index !== -1) {
    cart.splice(index, 1)
    updateBasketInHeader()
  }
}

const updateBasketInHeader = () => {
  let countInBasket = 0
  const basketCounter = document.getElementsByClassName('js-basket-counter')
  if (!basketCounter.length) {
    return false
  }

  const productsInBasket = getFromLS(PRODUCT_TO_BASKET_KEY)

  if (!productsInBasket) {
    return false
  }

  productsInBasket.forEach((product) => {
    countInBasket += product.quantity
  })

  basketCounter[0].innerHTML = countInBasket
}

const buyProduct = (product) => {
  const productsInBasket = getFromLS(PRODUCT_TO_BASKET_KEY)

  if (!productsInBasket) {
    setToLS(PRODUCT_TO_BASKET_KEY, [{ ...product, quantity: 1 }])
    updateBasketInHeader()
    return true
  }

  let hasProductInBasket = false

  const updatedProducts = productsInBasket.map((productInBasket) => {
    if (productInBasket.id === product.id) {
      hasProductInBasket = true

      return {
        ...productInBasket,
        quantity: productInBasket.quantity + 1
      }
    }

    return productInBasket
  })

  if (hasProductInBasket) {
    setToLS(PRODUCT_TO_BASKET_KEY, updatedProducts)
    updateBasketInHeader()
    return true
  }

  productsInBasket.push({ ...product, quantity: 1 })

  setToLS(PRODUCT_TO_BASKET_KEY, productsInBasket)
  updateBasketInHeader()
}

const saveColorHeart = () => {
  const favoriteIcon = document.getElementsByClassName('favorite-icon'); 

  let isRed = favoriteIcon.src.includes('heart-red'); 

  localStorage.setItem('colorHeart', isRed); 
}

const updateFavoritesInHeader = () => {
  const favoritesCounter = document.getElementsByClassName('js-favorites-counter')

  if (!favoritesCounter.length) {
    return false
  }

  const productsInFavorites = getFromLS(PRODUCT_TO_FAVORITES_KEY)

  if (!productsInFavorites) {
    return false
  }

  let countInFavorites = productsInFavorites.length

  favoritesCounter[0].innerHTML = countInFavorites

  const colorHeart = localStorage.getItem('colorHeart');
  if (colorHeart) {
    const favoriteIcon = document.getElementById('favorite-icon');
    if (colorHeart === 'true') {
      favoriteIcon.src = './icons/heart-red.svg';
    } else {
      favoriteIcon.src = './icons/heart.svg';
    }
  }
}

const favoriteProduct = (product) => {
  saveColorHeart()
  let productsInFavorites = getFromLS(PRODUCT_TO_FAVORITES_KEY)

  if (!productsInFavorites) {
    setToLS(PRODUCT_TO_FAVORITES_KEY, [product])
    updateFavoritesInHeader()
    return true
  }

  let hasProductInFavorites = false

  const updatedProducts = productsInFavorites.filter((productInFavorites) => {
    if (productInFavorites.id === product.id) {
      hasProductInFavorites = true
      return false
    }
    return true
  })

  if (!hasProductInFavorites) {
    updatedProducts.push(product)
  }

  setToLS(PRODUCT_TO_FAVORITES_KEY, updatedProducts)
  updateFavoritesInHeader()
  return true
}

const createPagination = (productsCount) => {
  const jsPages = document.getElementsByClassName('js-pages')

  if (!productsCount) {
    pagination.classList.add('hide')
    return
  }

  if (!jsPages.length) {
    return
  }

  pagination.classList.remove('hide')

  const jsPagesContainer = jsPages[0]
  jsPagesContainer.innerHTML = ''

  const pageCount = Math.ceil(productsCount / paginationInfo.perPage)

  paginationInfo.pages = pageCount

  for (let i = 0; i < pageCount; i++) {
    const page = document.createElement("div")
    page.classList.add("page")

    if (i === paginationInfo.activePage) {
      page.classList.add("active")
    }

    page.innerHTML = i + 1
    page.dataset.index = i

    page.addEventListener('click', (event) => {
      const currentElement = event.currentTarget

      const alreadyActive = document.querySelectorAll('.page.active')

      if (alreadyActive?.length) {
        alreadyActive[0].classList.remove('active')
      }

      currentElement.classList.add('active')
      paginationInfo.activePage = Number(currentElement.dataset.index)
      const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)
      createProductList(filteredProducts, productsCount)

      window.scrollTo({
        top: 650,
        behavior: 'smooth'
      })
    })


    jsPagesContainer.appendChild(page)
  }
}

const pagination = document.getElementById('pagination')
const leftArrow = pagination.querySelector('.bottom.left')
const rightArrow = pagination.querySelector('.bottom.right')

let currentPageIndex = 0

leftArrow.addEventListener('click', () => {
  const numberActivePage = paginationInfo.activePage + 1
  const pages = pagination.querySelectorAll('.page')

  if (numberActivePage > 1) {
    pages[currentPageIndex].classList.remove('active')
    currentPageIndex--
    pages[currentPageIndex].classList.add('active')
    paginationInfo.activePage = Number(pages[currentPageIndex].dataset.index)
    const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)
    createProductList(filteredProducts, productsCount)
  }
})

rightArrow.addEventListener('click', () => {
  const numberActivePage = paginationInfo.activePage + 1
  const pages = pagination.querySelectorAll('.page')

  if (numberActivePage + 1 <= paginationInfo.pages) {
    pages[currentPageIndex].classList.remove('active')
    currentPageIndex++
    pages[currentPageIndex].classList.add('active')
    paginationInfo.activePage = Number(pages[currentPageIndex].dataset.index)
    const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)
    createProductList(filteredProducts, productsCount)
  }

  window.scrollTo({
    top: 650,
    behavior: 'smooth'
  })
})

const createProductList = (products, productsCount) => {
  const jsProducts = document.getElementsByClassName("js-products")

  if (!jsProducts.length) {
    return
  }

  jsProducts[0].innerHTML = ''

  for (const product of products) {
    const createProduct_ = createProduct(product)
    jsProducts[0].appendChild(createProduct_)
  }

  createPagination(productsCount)
}

const filterBySearchValue = (products, value) => {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase())
  })
}

const filterProductsByFilterInfo = (products, filter) => {
  let filteredProducts = products

  if (Object.keys(filter).length) {
    if (filter.category && filter.category !== 'All') {
      filteredProducts = products.filter((product) => {
        return product.categories.includes(filter.category)
      })
    }
  }

  return filteredProducts
}

const sortProduct = (product, sort) => {
  products.sort((a, b) => {
    if (sort === 'ASC') {
      if (a.name > b.name) return 1;
      if (a.name === b.name) return 0;
      if (a.name < b.name) return -1;
    }
    if (a.name > b.name) return -1;
    if (a.name === b.name) return 0;
    if (a.name < b.name) return 1;
  })
}

const paginateProducts = (products, paginInfo) => {
  const productsCount = products.length
  const { perPage, activePage } = paginInfo
  const firstIndex = activePage * perPage
  const paginatedProducts = products.slice(firstIndex, (activePage + 1) * perPage)

  return {
    productsCount,
    paginatedProducts
  }
}

const filterProducts = (searchValue, filter, sort, pagination) => {
  let filteredProducts = [...products]

  if (searchValue) {
    filteredProducts = filterBySearchValue(filteredProducts, searchValue)
  }

  filteredProducts = filterProductsByFilterInfo(filteredProducts, filter)

  if (filter.price && filter.price.min >= 0 && filter.price.max <= 999999) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price >= filter.price.min && product.price <= filter.price.max
    })
  }

  if (filter.colors && filter.colors.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return filter.colors.includes(product.color)
    })
  }

  if (sort) {
    sortProduct(filteredProducts, sort)
  }

  const { paginatedProducts, productsCount } = paginateProducts(filteredProducts, paginationInfo)

  return {
    filteredProducts: paginatedProducts,
    productsCount
  }
}

const updateProductsCount = (count) => {
  document.getElementById('products-count').innerHTML = count
}

const toggleBlockFilterBtn = () => {
  const applyFilter = document.getElementById('apply-filter')

  if ((currentFilter.category !== oldFilter.category) || (currentFilter.price.min !== oldFilter.price.min) || (currentFilter.price.max !== oldFilter.price.max) || (currentFilter.colors.length !== oldFilter.colors.length)) {
    console.log(currentFilter.colors.length)
    console.log(oldFilter.colors.length)
    applyFilter.removeAttribute('disabled')
  } else {
    console.log("current", currentFilter.colors.length)
    console.log("old", oldFilter.colors.length)
    applyFilter.setAttribute('disabled', 'disabled')
  }

  if (JSON.stringify(currentFilter) === JSON.stringify(oldFilter)) {
    applyFilter.setAttribute('disabled', 'disabled');
  } else {
    applyFilter.removeAttribute('disabled');
  }
}

document.getElementById('search-row').addEventListener('keyup', debounce((e) => {
  searchValue = e.target.value

  paginationInfo.activePage = 0
  const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)
  createProductList(filteredProducts, productsCount)
  updateProductsCount(productsCount)
}, 500)
)

const categoryItems = document.getElementsByClassName('js-category')

for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener('click', (e) => {

    currentFilter.category = categoryItems[i].id

    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
      categoryItems[0].classList.add('active')
      toggleBlockFilterBtn()
      return
    }
    const alreadyActive = document.querySelectorAll('.js-category.active')

    if (alreadyActive?.length) {
      alreadyActive[0].classList.remove('active')
    }

    e.target.classList.add('active')
    toggleBlockFilterBtn()
  })
}

document.getElementById('apply-filter').addEventListener('click', (e) => {
  paginationInfo.activePage = 0
  const { filteredProducts, productsCount } = filterProducts(searchValue, currentFilter, sort, paginationInfo)

  createProductList(filteredProducts, productsCount)
  updateProductsCount(productsCount)
  e.target.setAttribute('disabled', 'disabled')

  oldFilter = { ...currentFilter }
})

document.getElementById('sort').addEventListener('change', (e) => {
  sort = e.target.value

  const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)
  createProductList(filteredProducts, productsCount)
  updateProductsCount(productsCount)
})

const getRandomProducts = (products, count) => {
  const newProducts = [...products]
  const randProducts = [];

  do {
    const randomNumber = Math.floor(Math.random() * newProducts.length)
    randProducts[randProducts.length] = newProducts.slice(
      randomNumber, 1)[0];
  } while (randProducts.length < count);

  return randProducts
}

document.getElementById('min-price').addEventListener('keyup', (e) => {
  currentFilter.price.min = Number(e.target.value)
  toggleBlockFilterBtn()
})

document.getElementById('max-price').addEventListener('keyup', (e) => {
  currentFilter.price.max = Number(e.target.value)
  toggleBlockFilterBtn()
})

document.getElementById('colors').addEventListener('click', (e) => {
  if (e.target.classList.contains('color-checkbox')) {
    const selectedColor = e.target.value; 

    if (e.target.checked) {
      currentFilter.colors.push(selectedColor); 
    } else {
      const index = currentFilter.colors.indexOf(selectedColor);
      if (index !== -1) {
        currentFilter.colors.splice(index, 1); 
      }
    }

    toggleBlockFilterBtn();
  }
})

const createRandomProduct = (product) => {
  const productWrapper = document.createElement("div")
  productWrapper.classList.add("product")

  const photo = document.createElement("div")
  photo.classList.add("photo")

  const productImage = document.createElement("img")
  // productImage.src = product.image
  productImage.classList.add('product-image')

  photo.appendChild(productImage)
  productWrapper.appendChild(photo)

  const info = document.createElement("div")
  info.classList.add("info")

  const name = document.createElement("div")
  name.classList.add("name")
  // name.innerHTML = product.name

  const price = document.createElement("div")
  price.classList.add("price")

  const currentPrice = document.createElement("div")
  currentPrice.classList.add("current-price")
  currentPrice.innerHTML = `$${product.price}`

  price.appendChild(currentPrice)

  if (product.oldPrice) {
    const oldPrice = document.createElement("div")
    oldPrice.classList.add("old-price")
    oldPrice.innerHTML = `$${product.oldPrice}`

    price.appendChild(oldPrice)
  }

  info.appendChild(name)
  info.appendChild(price)

  productWrapper.appendChild(info)
  return productWrapper
}

const generateReviewedByYou = () => {
  const randomProducts = getRandomProducts(products, 3)
  const container = document.getElementsByClassName('js-reviewed-products')[0]
  container.innerHTML = ''

  // randomProducts.forEach(product => {
  //     const randomProduct = createRandomProduct(product)
  //     container.appendChild(randomProduct)
  // })
}

generateReviewedByYou()

// const { paginatedProduct, productsCount } = paginateProducts(products, paginationInfo)

// createProductList(paginatedProduct, productsCount)
// updateBasketInHeader()
// updateProductsCount(products.length)