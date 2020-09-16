import {NEXT_PAGE , PREV_PAGE , SELECT_PAGE} from '../actions'


const initialState = {
    currentPage:1,
    pageShow:3,
    perPage:6
}
export const PaginationReducer = (state = initialState, action) => {
    switch (action.type)    {
        case NEXT_PAGE :
            return {...state,currentPage : state.currentPage + 1}
        case PREV_PAGE :
            return {...state,currentPage: state.currentPage - 1}
        case SELECT_PAGE:
            return {...state,currentPage:action.pageNumber}
        default :
            return state
    }
}





