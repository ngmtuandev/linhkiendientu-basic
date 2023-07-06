import defineAction from "./actionReducer";

export const addCart = (dataPrd) => ({
    type: defineAction.SET_CART,
    dataPrd
})

export const totalCart = (totalPrdInCart) => ({
    type: defineAction.TOTAL_CART,
    totalPrdInCart
})