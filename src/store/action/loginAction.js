import defineAction from "./actionReducer";

export const RegisterUser = (dataRegister) => ({
    type: defineAction.REGISTER,
    dataRegister
})

export const checkLogin = (isLogin) => ({
    type: defineAction.IS_LOGIN,
    isLogin
})