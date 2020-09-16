import {ORDER_BY_ASC , ORDER_BY_DESC} from '../actions'

export const orderByPriceReducer = (state = '',action) => {
    switch(action.type){
        case ORDER_BY_ASC :
        return state = 'asc'
        case ORDER_BY_DESC :
        return state = 'desc'
        default :
        return state
    }
}

export default orderByPriceReducer
