import data from '../data/data.json';

const initalState = {
    itemsList: data,
    cart: [],
    wishlist: [],
    // qty: 0
}

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
             let itemExistsInCart = state.cart.find( item => item.id === action.item.id);
             if(!itemExistsInCart){
                return {
                    ...state,
                    cart: [...state.cart, action.item]
                }
             }
            return{
                ...state
            }

        }
        case 'ADD_TO_WISHLIST':{
            let itemExistsInWishlist = state.wishlist.find( item => item.id === action.item.id);

            if(!itemExistsInWishlist){
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.item]
                }
            }
            return{
                ...state
            }
        }
        case 'ADD_REMOVE_QUANTITY':{
            let selectedQty = 'selectedQty'
            state.itemsList[action.index][selectedQty]=action.selectedQty;
            return {
                ...state,
                itemList: state.itemsList
            }
        }

        case 'REMOVE_FROM_CART': {
            let newCart = state.cart.filter( item => item.id !== action.item.id)
            return {
                ...state,
                cart: newCart
            }
        }
        default:
            return state;

    }
}

export default rootReducer;