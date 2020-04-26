import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from '../action'

const reducer = ( state, action) => {
    switch(action.type){
        case DECREASE:
            return {...state, count: state.count - 1}
        case INCREASE:
            let tempCart = state.cart.map((cartItem) => {
                console.log(cartItem)
                return cartItem
            })
            return {...state, cart: tempCart}
        case CLEAR_CART:
            return {...state, cart: []}
        case REMOVE:
            return {...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)}
        default:
            return state
    }
}

export default reducer