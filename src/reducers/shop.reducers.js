import {phones} from '../data/phones'
import {SEARCH_PRODUCT} from '../actions'

const initialState = {
    products: phones
}

const shopReducer = (state = initialState ,action) => {
    switch (action.type){
        case SEARCH_PRODUCT:
        const searchProd = initialState.products.filter(c=>c.title.includes(action.payload))
        return {...state, products:searchProd}
        default:
        return state
    }
}


export default shopReducer