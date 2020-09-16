//export const PRODUCT_FILTER = "PRODUCT_FILTER"

export const ADD_BRAND_TO_FILTER = "ADD_BRAND_TO_FILTER"
export const REMOVE_BRAND_FROM_FILTER = "REMOVE_BRAND_FROM_FILTER"
 


export const addBrandToFilter = brand => {
    return {
        type: ADD_BRAND_TO_FILTER ,
        brand
    }
}

export const removeBrandFromFilter = brand => {
    return {
        type: REMOVE_BRAND_FROM_FILTER ,
        brand
    }
}

export const ORDER_BY_ASC = "ORDER_BY_ASC"
export const ORDER_BY_DESC = "ORDER_BY_DESC"

export const orderByAsc = () => {
    return {
        type: ORDER_BY_ASC
    }
}

export const orderByDesc = () => {
    return {
        type: ORDER_BY_DESC
    }
}

export const PREV_PAGE = "PREV_PAGE"
export const NEXT_PAGE = "NEXT_PAGE"
export const SELECT_PAGE = "SELECT_PAGE"

export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
}

export const prevPage = () =>{
    return {
        type : PREV_PAGE
    }
}

export const selectPage = (pageNumber) => {
    return {
        type : SELECT_PAGE,
        pageNumber : pageNumber
    }
}


export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"

export const addProductToCart = (product) => {
    return{
        type: ADD_PRODUCT_TO_CART,
        payload : product
    }
} 

export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"
export const removeProduct = (id) =>{
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload:id
    }
}



export const INCREASE_QUANTITY = "INCREASE_QUNATITY"
export const DECREASE_QUANTITY = "DECREASE_QUNATITY"

export const increaseQuantity = (productID) => {
    return {
        type: INCREASE_QUANTITY,
        payload: productID
    }
} 

export const decreaseQuantity = (productID) => {
    return {
        type: DECREASE_QUANTITY,
        payload: productID
    }
}

export const SEARCH_PRODUCT =  "SEARCH_PRODUCT"
export const serchProduct = (productName) => {
    return {
        type: SEARCH_PRODUCT,
        payload: productName
    }
}

export const SEARCH_BY_PRICE = "SEARCH_BY_PRICE"
export const searchByPrice = (price) =>
{
    return {
        type: SEARCH_BY_PRICE,
        payload: price
    }
}