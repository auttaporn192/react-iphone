import {SEARCH_BY_PRICE} from '../actions'

const initialState = {price:100000}
const searchBar = (state = initialState,action) => { 
    
    switch(action.type){
        case SEARCH_BY_PRICE:
        const price = action.payload
        return {...state,price}
        default:
        return state
    }
}

export default searchBar