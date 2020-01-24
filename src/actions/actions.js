export const addToCart= (item) =>{
    return {
        type: 'ADD_TO_CART',
        item
    }
}

export const addToWishlist =item => {
    return {
        type: 'ADD_TO_WISHLIST',
        item
    }
}

export const addRemoveQuantity =(selectedQty, index)=> {
    return {
        type: 'ADD_REMOVE_QUANTITY',
        selectedQty,
        index
    }
}

export const removeItemFromCart = (item) =>{
    return {
        item,
        type: 'REMOVE_FROM_CART'
    }
}