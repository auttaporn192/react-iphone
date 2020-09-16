import {ADD_PRODUCT_TO_CART , REMOVE_PRODUCT_FROM_CART , INCREASE_QUANTITY , DECREASE_QUANTITY} from '../actions'

const initialState = {cart:[]}
export const Bracket = (state = initialState,action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            const updateCart = [...state.cart]
            const updateIndex = updateCart.findIndex(c => c.id === action.payload.id)
            if(updateIndex < 0){
                updateCart.push({...action.payload,quantity:  1})
            }
            else{
                updateCart[updateIndex].quantity = updateCart[updateIndex].quantity + 1 
            }
            
            return {...state, cart:updateCart}
        case REMOVE_PRODUCT_FROM_CART:
            const deleteCart = state.cart.filter(c => c.id !== action.payload)
            return {...state ,cart : deleteCart}
            
        case INCREASE_QUANTITY:
            const increaseCart = [...state.cart]
            const increaseIndex = increaseCart.findIndex(c => c.id === action.payload)
            increaseCart[increaseIndex].quantity = increaseCart[increaseIndex].quantity + 1
            return {...state ,cart: increaseCart }    

        case DECREASE_QUANTITY:
            const decreaseCart = [...state.cart]
            const decreaseIndex = decreaseCart.findIndex(c=> c.id === action.payload)
            if (decreaseCart[decreaseIndex].quantity > 0)
            decreaseCart[decreaseIndex].quantity = decreaseCart[decreaseIndex].quantity - 1
            return {...state , cart:decreaseCart}
        default:
            return state
    }
}