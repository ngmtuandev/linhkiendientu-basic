import defineAction from "../action/actionReducer";

const initState = {
    totalPrdInCart: 0,
    id: null,
    dataPrd: []
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case defineAction.SET_CART:
            let data = {
                id: action.dataPrd.id  ,
                name: action.dataPrd.name,
                desc: action.dataPrd.desc,
                img: action.dataPrd.cover  
            }
            return {
                ...state,
                dataPrd: [
                    ...state.dataPrd,
                    data
                ]
            }
        case defineAction.TOTAL_CART:
            return {
                ...state,
                totalPrdInCart: +action.totalPrdInCart + state.totalPrdInCart
            }
        default:
            return state;
    }
}

export default cartReducer