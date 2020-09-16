import shop from './shop.reducers'
import brandFilterReducer from './brand.reducer.filter'
import orderPrice from './order.reducers'
import {PaginationReducer} from './pagination.reducers'
import {Bracket} from './bracket.reducers'
import {combineReducers} from 'redux'
import searchBar from './search.reducers'

export default combineReducers({
    shop,
    brandFilter: brandFilterReducer,
    orderPrice,
    pagination: PaginationReducer,
    Bracket,
    searchBar
})