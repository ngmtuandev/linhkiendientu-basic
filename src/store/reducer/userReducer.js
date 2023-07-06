import defineAction from "../action/actionReducer";

const initState = {
    dataLogin: [],
    dataRegister: [],
    isLogin: false
}

const userReducer = (state = initState, action) => {

    switch (action.type) {
        case defineAction.REGISTER:
            
            return {
                ...state,
                dataRegister: action.dataRegister,
            }
        case defineAction.IS_LOGIN:
            // console.log('test', action.isLogin)
            return {
                ...state,
                isLogin: action.isLogin,
            }
    
        default:
            return state
    }

}

export default userReducer