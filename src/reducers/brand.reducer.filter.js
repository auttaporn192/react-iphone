import {ADD_BRAND_TO_FILTER , REMOVE_BRAND_FROM_FILTER} from '../actions/'

export const brandFilterReducer = (state ='' ,action) => {
    switch(action.type){
        case ADD_BRAND_TO_FILTER:
        if(state.includes(action.brand)) return state;
        return state += action.brand
        
        case REMOVE_BRAND_FROM_FILTER:
        const reg = new RegExp(action.brand ,'gi')
        return state = state.replace(reg,'')
        
        default:
            return state
    }
}
export default brandFilterReducer

